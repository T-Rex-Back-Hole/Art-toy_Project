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

  //Function add cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingItemIndex !== -1) {
        const updateCart = [...prevCart];
        updateCart[existingItemIndex].quantity += 1;
        return updateCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function Update qty in cart
  const updatedQuantities = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Function Delete item
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // calculateTotal to cart
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.itemPrice * item.quantity,
      0
    );
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
        updatedQuantities,
        removeItem,
        calculateTotal,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
