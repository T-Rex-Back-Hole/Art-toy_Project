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
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/products`);
      setProducts(response.data.products);

      setLoading(false);
    } catch (err) {
      setError("Error fetching data: " + err.message);
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

  const addToCart = async (itemId) => {
  
    let cartData = { ...cart };

    if (cartData[itemId]) {
      cartData[itemId].quantity += 1;
    } else {
      cartData[itemId] = { quantity: 1 };  // assuming cart data includes size and quantity
    }

    setCart(cartData);
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

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
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
    const totalItems = Object.values(cart).reduce((total, item) => total + item.quantity, 0);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
