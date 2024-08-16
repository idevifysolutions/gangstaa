import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import axios from "axios";

const Checkout = () => {
  const [userInfoToggle, setUserInfoToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipcode: "",
    method: "COD",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/order/new/cod",
        formData
      );
      alert("Order placed successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("There was an error placing the order!", error);
    }
  };

  return (
    <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
      <h3 className="mb-4 text-3xl font-semibold text-center">Checkout Now</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
          <div className="md:w-2/3">
            <div className="p-2 mb-6 border">
              <div
                className="flex items-center justify-between mx-4 mt-2 cursor-pointer"
                onClick={() => setUserInfoToggle(!userInfoToggle)}
              >
                <h3 className="mb-2 text-lg font-semibold">User Information</h3>
                {userInfoToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`space-y-4 ${userInfoToggle ? "" : "hidden"}`}>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
              </div>
            </div>

            <div className="p-2 mb-6 border">
              <div
                className="flex items-center justify-between mx-4 mt-2 cursor-pointer"
                onClick={() => setShippingToggle(!shippingToggle)}
              >
                <h3 className="mb-2 text-lg font-semibold">
                  Shipping Information
                </h3>
                {shippingToggle ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Your Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter Your City Name"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
                <div className="m-4">
                  <label className="block mb-2 text-gray-400" htmlFor="zipcode">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter Zip Code"
                    value={formData.zipcode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-2px"
                  />
                </div>
              </div>
            </div>

            <div className="p-2 mb-6 border">
              <div
                className="flex items-center justify-between mx-2 mt-2 cursor-pointer sm:mx-4"
                onClick={() => setPaymentToggle(!paymentToggle)}
              >
                <h3 className="mb-2 text-base font-semibold sm:text-lg">
                  Payment Method
                </h3>
                {paymentToggle ? (
                  <FaAngleUp className="text-sm sm:text-base" />
                ) : (
                  <FaAngleDown className="text-sm sm:text-base" />
                )}
              </div>
              <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                <div className="m-2 sm:m-4">
                  <select
                    name="method"
                    value={formData.method}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 border border-2px sm:px-3"
                  >
                    <option value="COD">Cash on Delivery</option>
                    <option value="Online">Online Payment</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white border rounded-lg shadow-md md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
            <div className="mb-4">
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
              <p>Address: {formData.address}</p>
              <p>City: {formData.city}</p>
              <p>Zip Code: {formData.zipcode}</p>
              <p>Payment Method: {formData.method}</p>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-4 mt-4 text-xl font-bold text-white bg-black"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
