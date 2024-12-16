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
  const [cart, setCart] = useState({}); // Initializing as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItemCount, setCartItemCount] = useState(0);
  const backendUrl = import.meta.env.VITE_API_URL;
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

  // Fetch data cart
  const getItems = async () => {
    try {
      // เรียก API เพื่อดึงข้อมูลตะกร้าและข้อมูลผู้ใช้ (userId, token)
      const response = await axios.get(`${backendUrl}/cart/get`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.data.success) {
        const { cart } = response.data;

        setCart(cart);
      }
    } catch (error) {
      console.error("Error getting items in cart:", error);
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
      // Use Object.values to get an array of the cart items
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
    const { _id } = product;

    const token = localStorage.getItem("token");

    // ตรวจสอบว่ามี token หรือไม่
    if (!token) {
      toast.error("Please log in to add items to your cart.");
      return;

    }

    // อัปเดตข้อมูลตะกร้าใน state
    setCart((prevCart) => {
      const updatedCart = { ...prevCart }; // Create a shallow copy of cart

      if (updatedCart[_id]) {
        updatedCart[_id].quantity += quantity; // Update the quantity if the product already exists
      } else {
        updatedCart[_id] = { ...product, quantity }; // Add the product to cart if it doesn't exist
      }

      return updatedCart; // Return the updated cart object
    });

    toast.success("Product successfully added to the cart! ✅", {
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
      await axios.post(
        `${backendUrl}/cart/add`,
        {
          itemId: _id,
          quantity,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Error Unable to add product:", error);
      toast.error("Unable to add product to cart. Please try again.");
    }
  };

  // Update product quantity in cart
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((prevCart) => {
      const updatedCart = { ...prevCart }; // Create a shallow copy of cart

      if (updatedCart[id]) {
        updatedCart[id].quantity = newQuantity; // Update the quantity of the specific product
      }

      return updatedCart; // Return the updated cart object
    });

    updateCartItemCount();
  };

  const removeItem = async (id) => {
    setLoading(true);
    try {
      // ส่งคำขอ DELETE ไปยัง backend เพื่อลบสินค้าจากฐานข้อมูล
      const response = await axios.delete(`${backendUrl}/cart/removeItem`, {
        params: { itemId: id },
        headers: { Authorization: `Bearer ${token}` },
      });

      // ตรวจสอบว่า API ลบสำเร็จหรือไม่
      if (response.data.success) {
        // อัปเดตตะกร้าใน state
        setCart(response.data.cart);

        // อัปเดตข้อมูลใน localStorage
        localStorage.setItem("cart", JSON.stringify(response.data.cart));

        updateCartItemCount();
        toast.success("Item successfully removed from the cart! ✅🎉 ");
      } else {
        console.error("Error Unable to Remove Item :", response.data.message);
        toast.error(`Unable to Remove Item: ${response.data.message} 🔥🔥`);

      }
    } catch (error) {
      console.error("Error Unable to remove item from cart", error);
      toast.error("Unable to remove item from cart. Please try again.");
    } finally {
      setLoading(false); // กำหนดสถานะ loading ให้เป็น false หลังจากเสร็จสิ้น
    }
  };

  const removeAllItem = async (id) => {
    setLoading(true);
    try {
      // ส่งคำขอ DELETE ไปยัง backend เพื่อลบสินค้าจากฐานข้อมูล
      const response = await axios.delete(`${backendUrl}/cart/removeAllItem`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // ตรวจสอบว่า API ลบสำเร็จหรือไม่
      if (response.data.success) {
        // ถ้าลบสำเร็จ, อัปเดตตะกร้าใน state
        setCart(response.data.cart); // อัปเดต cartData จาก API
        updateCartItemCount(); // อัปเดตจำนวนสินค้าทั้งหมดในตะกร้า
        toast.success("Item removed All from cart! ✅😎 ");
      } else {
        console.error("Error Remove All Item :", response.data.message);
        toast.error(`Error Remove All Item ${response.data.message} 🔥🔥`);
      }
    } catch (error) {
      console.error("Error‼️ Unable to remove all items from the cart", error);
      toast.error(
        "Unable to remove all items from the cart. Please try again."
      );

    } finally {
      setLoading(false); // กำหนดสถานะ loading ให้เป็น false หลังจากเสร็จสิ้น
    }
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
        updateCartItemCount,
        formatMoney,
        setToken,
        token,
        getItems,
        setCart,
        removeAllItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
