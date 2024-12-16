import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Context creation
const DataContext = createContext();

// Custom hook for easy access to the context
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);
  const backendUrl = import.meta.env.VITE_API_URL;
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Fetch data from backend
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendUrl}/products`);
      setProducts(response.data.products);
    } catch (error) {
      setError("Error fetching data: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart items from the backend
  const getItems = async () => {
    if (!token) {
      return toast.error("Please log in to view your cart.");
    }

    try {
      const response = await axios.get(`${backendUrl}/cart/get`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setCart(response.data.cart); // Set cart from backend
      }
    } catch (error) {
      console.error("Error getting items in cart:", error);
      toast.error("Failed to get items in cart. Please try again.");
    }
  };

  // Update cart item count
  const updateCartItemCount = () => {
    if (cart && Object.keys(cart).length > 0) {
      const totalQuantity = Object.values(cart).reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(totalQuantity);
    } else {
      setCartItemCount(0);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    if (cart && Object.keys(cart).length > 0) {
      const total = Object.values(cart).reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { total };
    }
    return { total: 0 };
  };

  // Add product to cart
  const addToCart = async (product, quantity) => {
    if (!token) {
      toast.error("Please log in to add products to the cart.");
      return;
    }

    const { _id } = product;

    try {
      // Add product to cart in backend
      const response = await axios.post(
        `${backendUrl}/cart/add`,
        { itemId: _id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setCart(response.data.cart); // Update cart from backend response
        toast.success("Product added to cart!");
        updateCartItemCount();
      } else {
        toast.error("Failed to add product to cart. Please try again.");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  // Update product quantity in cart
  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      const response = await axios.put(
        `${backendUrl}/cart/updateQuantity`,
        { itemId: id, quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setCart(response.data.cart); // Update cart from backend response
        updateCartItemCount();
      } else {
        toast.error("Failed to update product quantity.");
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Error updating product quantity.");
    }
  };

  // Remove item from cart
  const removeItem = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}/cart/removeItem`, {
        params: { itemId: id },
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCart(response.data.cart); // Update cart from backend response
        toast.success("Item removed from cart!");
        updateCartItemCount();
      } else {
        toast.error("Failed to remove item from cart.");
      }
    } catch (error) {
      console.error("Error removing item from cart", error);
      toast.error("Error removing item from cart.");
    }
  };

  // Remove all items from cart
  const removeAllItem = async () => {
    try {
      const response = await axios.delete(`${backendUrl}/cart/removeAllItem`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setCart(response.data.cart); // Update cart from backend response
        toast.success("All items removed from cart!");
        updateCartItemCount();
      } else {
        toast.error("Failed to remove all items from cart.");
      }
    } catch (error) {
      console.error("Error removing all items from cart", error);
      toast.error("Error removing all items from cart.");
    }
  };

  // Format money
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    fetchData(); // Fetch products on mount
  }, []);

  // Update cart item count when cart changes
  useEffect(() => {
    updateCartItemCount();
  }, [cart]);

  // Token management (update localStorage when token changes)
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // Store token in localStorage
    }
  }, [token]);

  // Get cart items on initial load
  useEffect(() => {
    if (token) {
      getItems(); // Fetch cart from backend if token is available
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
        updateCartItemCount,
        formatMoney,
        setToken,
        token,
        getItems,
        removeAllItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
