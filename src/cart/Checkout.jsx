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

  const [method, setMethod] = useState("cod"); // สามารถเลือกได้ระหว่าง stripe หรือ cod (Cash on Delivery)
  const [isProcessing, setIsProcessing] = useState(false); // ใช้เพื่อแสดงสถานะกำลังประมวลผล
  const navigate = useNavigate();

  const cartItems = [
    // สมมติว่าเราเก็บ cartItems ไว้ในตัวแปรนี้
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
    // สามารถเพิ่มสินค้าตามที่ต้องการ
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  ); // คำนวณยอดรวม

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      // ตรวจสอบข้อมูลที่อยู่และกรอกให้ครบถ้วน
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
        userId: localStorage.getItem("userId"), // สมมติว่าเรามี userId ใน localStorage
        cartItems: cartItems, // ส่งข้อมูล cartItems
        totalAmount: totalAmount, // ยอดรวมที่คำนวณได้
        addressInfo: {
          addressId: "address_id", // ใช้ addressId จริงๆ ถ้ามี
          address: formData.street,
          city: formData.city,
          zipcode: formData.zipcode,
          phone: formData.phone,
          notes: formData.notes,
        },
        orderStatus: "pending", // สถานะของคำสั่งซื้อ
        paymentMethod: method, // วิธีการชำระเงิน (COD หรือ Stripe)
        paymentStatus: false, // สถานะการชำระเงินยังไม่เสร็จ
        orderDate: new Date(), // วันเวลาในการสั่งซื้อ
      };

      switch (method) {
        case "cod": {
          const response = await axios.post("/api/order/place", orderData, {
            headers: { token: localStorage.getItem("userToken") },
          });

          if (response.data.success) {
            alert("Order placed successfully");
            navigate("/orders");
          } else {
            alert(response.data.message);
          }
          break;
        }

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
        className="grid grid-cols-1 gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t"
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
            {/* ------------- Country Select Dropdown ---------------- */}
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

        {/* ------------- Payment Method ---------------- */}
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

            <div
              className={`flex items-center gap-3 border p-4 rounded-lg cursor-pointer ${
                method === "cod" ? "border-green-500" : "border-gray-300"
              }`}
              onClick={() => setMethod("cod")}
            >
              <p className="text-gray-500 text-sm font-medium">
                Cash on Delivery
              </p>
            </div>
          </div>

          {/* Moved Place Order button here */}
          <div className="w-full text-end mt-8">
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
}

export default Checkout;
