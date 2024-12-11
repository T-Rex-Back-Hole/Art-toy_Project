import React, { useState }  from "react";

function Checkout() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   street: "",
  //   city: "",
  //   state: "",
  //   zipcode: "",
  //   country: "",
  //   phone: "",
  // });

  // const onChangeHandler = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setFormData((data) => ({ ...data, [name]: value }));
  // };

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   try {
  //     let orderItems = [];

  //     for (const items in cartItems) {
  //       for (const item in cartItems[items]) {
  //         if (cartItems[items][item] > 0) {
  //           const itemInfo = structuredClone(
  //             products.find((product) => product._id === items)
  //           );
  //           if (itemInfo) {
  //             itemInfo.size = item;
  //             itemInfo.quantity = cartItems[items][item];
  //             orderItems.push(itemInfo);
  //           }
  //         }
  //       }
  //     }

  //     let orderData = {
  //       address: formData,
  //       items: orderItems,
  //       amount: getCartAmount() + delivery_fee,
  //     };

  //     switch (method) {
  //       // API Calls for COD
  //       case "cod":
  //         const response = await axios.post(
  //           backendUrl + "/api/order/place",
  //           orderData,
  //           { headers: { token } }
  //         );
  //         if (response.data.success) {
  //           setCartItems({});
  //           navigate("/orders");
  //         } else {
  //           toast.error(response.data.message);
  //         }
  //         break;

  //       case "stripe":
  //         const responseStripe = await axios.post(
  //           backendUrl + "/api/order/stripe",
  //           orderData,
  //           { headers: { token } }
  //         );
  //         if (responseStripe.data.success) {
  //           const { session_url } = responseStripe.data;
  //           window.location.replace(session_url);
  //         } else {
  //           toast.error(responseStripe.data.message);
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.message);
  //   }
  // };

  return (
    <form
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ------------- Left Side ---------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          {/* <Title text1={"DELIVERY"} text2={"INFORMATION"} /> */}
        </div>
        <div className="flex gap-3">
          <input
            required
            name="firstName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            required
            name="lastName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          required
          name="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          name="street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            required
            name="city"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            name="state"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            name="zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            name="country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          name="phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* ------------- Right Side ------------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <p>CartTotal</p>
        </div>
        <div className="mt-12">
          {/* <Title text1={"PAYMENT"} text2={"METHOD"} /> */}
          {/* --------------- Payment Method Selection ------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              {/* <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p> */}
              {/* <img className="h-5 mx-4" src={assets.stripe_logo} alt="" /> */}
            </div>
            <div
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              {/* <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p> */}
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Checkout;
