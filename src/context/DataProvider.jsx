import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);
  const backendUrl = import.meta.env.VITE_USER_URL;
  const [token, setToken] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/products`);
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data: " + error.message);
      setLoading(false);
    }
  };

  const updateCartItemCount = () => {
    if (Array.isArray(cart)) {
      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(totalQuantity);
    } else {
      console.error("cart is not an array:", cart);
    }
  };


  const calculateTotal = () => {
    if (Array.isArray(cart)) {
      const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { total, totalItems };
    } else {
      console.error("cart is not an array:", cart);
      return { total: 0, totalItems: 0 };
    }
  };


  const addToCart = async (product) => {
    const { _id } = product;

    setCart((prevCart) => {
      // Ensure prevCart is an array
      const updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item._id === _id
      );

      if (existingProductIndex !== -1) {
        updatedCart[existingProductIndex].quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return updatedCart;
    });

    toast.success("Product added!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });

    updateCartItemCount();

    try {
      await axios.post(`${backendUrl}/cart/add`, {
        userId: "67546911878a73f04524d23c", // Replace with actual userId
        _id,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      // Ensure prevCart is an array
      const updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];
      const updatedCartWithNewQuantity = updatedCart.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      );
      return updatedCartWithNewQuantity;
    });

    updateCartItemCount();
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    updateCartItemCount();
  };

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(
    () => {
      fetchData();
      updateCartItemCount();
      if (!token && localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    },
    [],
    [cart],
    [token]
  );

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        products,
        cart,
        loading,
        error,
        fetchData,
        addToCart,
        updateQuantity,
        removeItem,
        calculateTotal,
        cartItemCount,
        formatMoney,
        setToken,
        token,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
