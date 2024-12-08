import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const backendUrl = import.meta.env.VITE_USER_URL;

function CartContext() {

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
  
  return (
    <>
      
    </>
  )
}

export default CartContext
