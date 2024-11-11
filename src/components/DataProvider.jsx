import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://672a2e23976a834dd02275cf.mockapi.io/category"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data: " + err.message);
      setLoading(false);
    }
  };

  const updateCartItemCount = () => {
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalQuantity);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += product.quantity;
        return updatedCart;
      }
      return [...prevCart, product];
    });
    updateCartItemCount();
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    updateCartItemCount();
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    updateCartItemCount();
  };

  const calculateTotal = () => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
