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

    if (!token) {
      toast.error("Please log in to add products to the cart.");
      return;
    }

    // อัปเดตข้อมูลตะกร้าใน state
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };

      if (updatedCart[_id]) {
        updatedCart[_id].quantity += quantity;
      } else {
        updatedCart[_id] = { ...product, quantity };
      }

      // อัปเดตข้อมูลใน localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

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
      await axios.post(
        `${backendUrl}/cart/add`,
        { itemId: _id, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
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
      const response = await axios.delete(`${backendUrl}/cart/removeItem`, {
        params: { itemId: id },
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        // อัปเดตตะกร้าใน state
        setCart(response.data.cart);

        // อัปเดตข้อมูลใน localStorage
        localStorage.setItem("cart", JSON.stringify(response.data.cart));

        updateCartItemCount();
        toast.success("Item removed from cart! ✅🎉 ");
      } else {
        console.error("Error Remove Item :", response.data.message);
        toast.error(`Error Remove Item: ${response.data.message} 🔥🔥`);
      }
    } catch (error) {
      console.error("Error removing item from cart", error);
      toast.error("Error removing item from cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const removeAllItem = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${backendUrl}/cart/removeAllItem`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        // อัปเดตตะกร้าใน state
        setCart(response.data.cart);

        // อัปเดตข้อมูลใน localStorage
        localStorage.setItem("cart", JSON.stringify(response.data.cart));

        updateCartItemCount();
        toast.success("All items removed from cart! ✅😎 ");
      } else {
        console.error("Error Remove All Item :", response.data.message);
        toast.error(`Error Remove All Item: ${response.data.message} 🔥🔥`);
      }
    } catch (error) {
      console.error("Error removing all items from cart", error);
      toast.error("Error removing all items from cart. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Format money
  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  useEffect(() => {
    fetchData();
  }, []); // Fetch products when component mounts

  // Update cart item count whenever cart changes
  useEffect(() => {
    updateCartItemCount();
  }, [cart]);

  // Token management (update localStorage when token changes)
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  // Get cart items on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart)); // Set cart data from localStorage if exists
    } else {
      getItems(); // If no cart data, fetch from backend
    }
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
