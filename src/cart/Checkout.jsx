import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "TH", // ประเทศที่เลือกเป็นประเทศไทย
    phone: "",
    notes: "", // เพิ่มช่องสำหรับโน้ต
  });

  const [method, setMethod] = useState("stripe"); // กำหนดค่าเริ่มต้นเป็น stripe
  const [isProcessing, setIsProcessing] = useState(false); // ใช้เพื่อแสดงสถานะกำลังประมวลผล
  const navigate = useNavigate();

  const cartItems = [
    {
      productId: "product1",
      quantity: 1,
      name: "Product 1",
      price: "100",
      image: "image_url",
      category: "Category 1",
      materials: "Material 1",
      product_type: "Type 1",
      description: "Description 1",
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.street ||
        !formData.city ||
        !formData.zipcode ||
        !formData.country ||
        !formData.phone
      ) {
        alert("Please fill out all fields.");
        return;
      }

      const orderData = {
        userId: localStorage.getItem("userId"),
        cartItems: cartItems,
        totalAmount: totalAmount,
        addressInfo: {
          addressId: "address_id",
          address: formData.street,
          city: formData.city,
          zipcode: formData.zipcode,
          phone: formData.phone,
          notes: formData.notes,
        },
        orderStatus: "pending",
        paymentMethod: method,
        paymentStatus: false,
        orderDate: new Date(),
      };

      switch (method) {
        case "stripe": {
          const responseStripe = await axios.post(
            "/api/order/stripe",
            orderData,
            {
              headers: { token: localStorage.getItem("userToken") },
            }
          );

          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            alert(responseStripe.data.message);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t"
        onSubmit={onSubmitHandler}
      >
        {/* ------------- Delivery Information ---------------- */}
        <div className="flex flex-col gap-6 w-full">
          <div className="text-xl sm:text-2xl my-3 font-semibold text-gray-800">
            Delivery Information
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              required
              name="firstName"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={onChangeHandler}
            />
            <input
              required
              name="lastName"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={onChangeHandler}
            />
          </div>

          <input
            required
            name="email"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={onChangeHandler}
          />
          <input
            required
            name="street"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"
            value={formData.street}
            onChange={onChangeHandler}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              required
              name="city"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={onChangeHandler}
            />
            <input
              name="state"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
              value={formData.state}
              onChange={onChangeHandler}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              required
              name="zipcode"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Zipcode"
              value={formData.zipcode}
              onChange={onChangeHandler}
            />
            <select
              required
              name="country"
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              value={formData.country}
              onChange={onChangeHandler}
              disabled
            >
              <option value="TH">Thailand</option>
            </select>
          </div>

          <input
            required
            name="phone"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
            value={formData.phone}
            onChange={onChangeHandler}
          />
          <textarea
            name="notes"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Additional notes"
            value={formData.notes}
            onChange={onChangeHandler}
          />
        </div>

        {/* ------------- Order Summary and Payment Method (ใน div เดียวกัน) ---------------- */}
        <div className="space-y-6 w-full lg:w-96">
          {/* Order Summary */}
          <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-md sm:p-6">
            <p className="text-xl font-semibold text-gray-900">Order summary</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500">
                    Subtotal
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ฿{totalAmount.toFixed(2)}
                  </dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500">
                    Shipping Fee
                  </dt>
                  <dd className="text-base font-medium text-gray-900">฿ 0</dd>
                </dl>
              </div>
              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                <dt className="text-base font-bold text-gray-900">Total</dt>
                <dd className="text-base font-bold text-green-600">
                  ฿{totalAmount.toFixed(2)}
                </dd>
              </dl>
            </div>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col gap-6 w-full mt-8">
            <div className="text-xl sm:text-2xl my-3 font-semibold text-gray-800">
              Payment Method
            </div>

            <div className="flex gap-6 flex-col sm:flex-row">
              <div
                className={`flex items-center gap-3 border p-4 rounded-lg cursor-pointer ${
                  method === "stripe" ? "border-green-500" : "border-gray-300"
                }`}
                onClick={() => setMethod("stripe")}
              >
                <p className="text-gray-500 text-sm font-medium">Stripe</p>
              </div>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm rounded-md disabled:opacity-50"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
