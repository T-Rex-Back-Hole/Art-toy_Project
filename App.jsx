import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./src/home/Home";
import Navbar from "./src/components/Navbar";
import Login from "./src/pages/Login";
import Contact from "./src/pages/Contact";
import Cart from "./src/cart/Cart";
import Footer from "./src/components/Footer";
import DetailModel from "./src/components/DetailModel";
import Arttoy from "./src/pages/Arttoy";
import Heroes from "./src/pages/Heroes";
import Register from "./src/pages/Register";
import { DataProvider } from "./src/context/DataProvider";
import Checkout from "./src/cart/Checkout";
import CompletePurchase from "./src/cart/CompletePurchase";
import Personal from "./src/pages/Personal-info";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <DataProvider>
      <Router>
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/art-toy" element={<Arttoy />} />
          <Route path="/hero" element={<Heroes />} />
          <Route path="/detail/:id" element={<DetailModel />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/complete" element={<CompletePurchase />} />
        </Routes>
        <Footer />
      </Router>
    </DataProvider>
  );
};

export default App;
