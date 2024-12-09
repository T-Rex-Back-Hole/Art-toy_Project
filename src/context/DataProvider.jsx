import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
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
    const totalQuantity = Object.values(cart).reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItemCount(totalQuantity);
  };

  useEffect(() => {
    console.log("Log cart =>", cart);
  }, [cart]);

  const addToCart = async (product) => {
    const { _id } = product;

    let cartData = { ...cart };

    if (cartData[_id]) {
      cartData[_id].quantity += 1;
    } else {
      cartData[_id] = { quantity: 1 }; // assuming cart data includes size and quantity
    }
    setCart(product);

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
        userId: "67546911878a73f04524d23c",
        _id,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[id]) {
        newCart[id].quantity = newQuantity;
      }
      return newCart;
    });

    updateCartItemCount();
  };

  const removeItem = (productId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });

    updateCartItemCount();
  };

  const calculateTotal = () => {
    const totalItems = Object.values(cart).reduce(
      (total, item) => total + item.quantity,
      0
    );
    const total = Object.values(cart).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { total, totalItems };
  };

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    updateCartItemCount();
  }, [cart]);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
    if (token) {
      getUserCart(token);
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
