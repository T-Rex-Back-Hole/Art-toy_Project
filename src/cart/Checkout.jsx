import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, token, calculateTotal } = useData();
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumber: "",
    province: "",
    district: "",
    subDistrict: "",
    zipcode: "",
    notes: ""
  });
  const [error, setError] = useState("");
  const { total } = calculateTotal();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // แปลงข้อมูลตะกร้าให้อยู่ในรูปแบบที่ต้องการ
      const items = Object.entries(cart).map(([id, item]) => ({
        id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }));

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/order/stripe`,
        {
          items,
          amount: total, // ส่งยอดรวมไปให้ server คำนวณค่าส่งเพิ่ม
          address: formData
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (response.data.success) {
        window.location.href = response.data.session_url;
      } else {
        setError(response.data.message || "Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError(error.response?.data?.message || "An error occurred during checkout");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="bg-gray-50 p-4 rounded">
          {Object.entries(cart).map(([id, item]) => (
            <div key={id} className="flex justify-between mb-2">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover mr-4" />
                <span>{item.name} x {item.quantity}</span>
              </div>
              <span>฿{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>฿{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Fee</span>
              <span>฿30</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>฿{total + 30}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded">
            {error}
          </div>
        )}

        <div>
          <label className="block mb-1">Full Name *</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        {/* ฟิลด์ที่อยู่อื่นๆ */}
        
        <button
          type="submit"
          className="w-full bg-[#B47AEA] text-white py-3 px-4 rounded hover:bg-purple-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
