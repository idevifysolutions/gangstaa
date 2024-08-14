import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Checkout = () => {
  const [userInfoToggle, setUserInfoToggle] = useState(true);

  return (
    <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
      <h3 className="mb-4 text-3xl font-semibold text-center">Checkout Now</h3>
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
                  className="w-full px-3 py-2 border border-2px"
                />
              </div>
            </div>
          </div>

          <div className="p-2 mb-6 border">
            <div
              className="flex items-center justify-between mx-4 mt-2 cursor-pointer"
              onClick={() => setUserInfoToggle(!userInfoToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">
                Shipping Information
              </h3>
              {userInfoToggle ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <div className={`space-y-4 ${userInfoToggle ? "" : "hidden"}`}>
              <div className="m-4">
                <label className="block mb-2 text-gray-400" htmlFor="name">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border border-2px"
                />
              </div>
              <div className="m-4">
                <label className="block mb-2 text-gray-400" htmlFor="email">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter Your City Name"
                  className="w-full px-3 py-2 border border-2px"
                />
              </div>
              <div className="m-4">
                <label className="block mb-2 text-gray-400" htmlFor="phone">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border border-2px"
                />
              </div>
            </div>
          </div>

          <div className="p-2 mb-6 border">
            <div
              className="flex items-center justify-between mx-4 mt-2 cursor-pointer"
              onClick={() => setUserInfoToggle(!userInfoToggle)}
            >
              <h3 className="mb-2 text-lg font-semibold">Payment Method</h3>
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
                  className="w-full px-3 py-2 border border-2px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-md md:w-1/3"></div>
      </div>
    </div>
  );
};

export default Checkout;
