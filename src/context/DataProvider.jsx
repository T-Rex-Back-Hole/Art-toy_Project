import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import jwt_decode from "jwt-decode";

// Context creation
const DataContext = createContext();

// Custom hook for easy access to the context
export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Initializing as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);
  const backendUrl = import.meta.env.VITE_USER_URL;
  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Initialize token from localStorage

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

  // Update cart item count
  const updateCartItemCount = () => {
    if (Array.isArray(cart)) {
      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(totalQuantity);
    }
  };

  // Calculate total price
  const calculateTotal = () => {
    if (Array.isArray(cart)) {
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      return { total, totalItems: cart.length };
    }
    return { total: 0, totalItems: 0 };
  };

  // Add product to cart
  const addToCart = async (product, quantity) => {
    const { _id } = product;

    const token = localStorage.getItem("token");

    // ตรวจสอบว่ามี token หรือไม่
    if (!token) {
      toast.error("Please log in to add products to the cart.");
      return; // หยุดการทำงานหากไม่มี token
    }

    // ถอดรหัส JWT เพื่อนำ userId ออกมา
    const decodedToken = jwt_decode(token); // ใช้ jwt_decode() เป็นฟังก์ชัน
    console.log(decodedToken);
    const userId = decodedToken.id;

    if (!userId) {
      toast.error("Invalid token.");
      return;
    }

    // อัปเดตข้อมูลตะกร้าใน state
    setCart((prevCart) => {
      const updatedCart = Array.isArray(prevCart) ? [...prevCart] : [];
      const existingProductIndex = updatedCart.findIndex(
        (item) => item._id === _id
      );

      if (existingProductIndex !== -1) {
        updatedCart[existingProductIndex].quantity += quantity;
      } else {
        updatedCart.push({ ...product, quantity });
      }

      return updatedCart;
    });

    toast.success("Product added to cart!", {
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
      // ส่งข้อมูลตะกร้าไปยัง backend
      await axios.post(`${backendUrl}/cart/add`, {
        userId, // ส่ง userId ที่ได้จากการ decode token
        itemId: _id,
        quantity,
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  // Update product quantity in cart
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id ? { ...item, quantity: newQuantity } : item
      );
      return updatedCart;
    });

    updateCartItemCount();
  };

  // Remove product from cart
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
    updateCartItemCount();
  };

  // Format money
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  // Fetch data and update cart count on initial load
  useEffect(() => {
    fetchData();
  }, []); // Only run once on component mount

  // Update cart item count when cart changes
  useEffect(() => {
    updateCartItemCount();
  }, [cart]); // Recalculate total count when cart changes

  // Token management in localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]); // Only update localStorage when token changes

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
