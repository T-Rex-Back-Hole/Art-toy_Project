import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvider";
import axios from "axios";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, token } = useData();
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

    try {
      // แปลงข้อมูลตะกร้าให้อยู่ในรูปแบบที่ต้องการ
      const items = Object.entries(cart).map(([id, item]) => ({
        id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      }));

      // คำนวณยอดรวม
      const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/order/stripe`,
        {
          items,
          amount: totalAmount,
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
        setError("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

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
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>฿{Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block mb-1">Full Name</label>
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
            <label className="block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Province</label>
            <input
              type="text"
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Sub District</label>
            <input
              type="text"
              name="subDistrict"
              value={formData.subDistrict}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Zipcode</label>
            <input
              type="text"
              name="zipcode"
              value={formData.zipcode}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1">Notes (Optional)</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#B47AEA] text-white py-3 px-4 rounded hover:bg-purple-600"
          >
            Proceed to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
