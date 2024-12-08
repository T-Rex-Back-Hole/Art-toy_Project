import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "../services/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null); // Add userId state
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchUserData(storedToken);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('/client/login', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data.user);
      setUserId(response.data.user._id); // Set userId from response
    } catch (error) {
      console.error('Failed to fetch user data', error);
      logout(); 
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/login", formData);
      // console.log("Login response:", response.data);

      const { token, user } = response.data;
      setToken(token);
      setUserId(user._id); // Set userId from login response
      localStorage.setItem("token", token);
      setFormData({ identifier: "", password: "" });
      setError("");
      navigate("/");
      fetchUserData(token); 
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        setError(error.response.data.message || "Login failed");
      } else if (error.request) {
        setError("Network error. Please try again.");
      } else {
        setError("Unexpected error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/auth/register", formData);
      // console.log("Registration response:", response.data);

      setFormData({ username: "", email: "", password: "" });
      setError("");
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response) {
        setError(error.response.data.message || "Registration failed");
      } else if (error.request) {
        setError("Network error. Please try again.");
      } else {
        setError("Unexpected error. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setUserId(null); // Reset userId on logout
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ formData, handleChange, login, register, logout, error, isLoading, user, token, userId }} // Add userId to the context value
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext };