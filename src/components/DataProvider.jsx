import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const addToCart = (productToAdd) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += productToAdd.quantity;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, productToAdd]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
