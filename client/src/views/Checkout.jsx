/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../features/productCart/productCart";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const [userInfoToggle, setUserInfoToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const {address, phone} = location.state
  // console.log("shippingInfo",location.state, address)

  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total,
  } = useSelector((state) => state.cartReducer);

  console.log(
    "selector",
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total
  );

  const [formData, setFormData] = useState({
    method: "COD", // Default to COD
    phone: shippingInfo.phone,
    address: shippingInfo.address,
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      let endpoint = "http://localhost:4000/api/order/new/cod";

      if (formData.method === "online") {
        endpoint = "http://localhost:4000/api/order/new/online";
      }

      const response = await axios.post(
        endpoint,
        {
          items: cartItems,
          method: formData.method,
          phone: shippingInfo.phone,
          shippingInfo,
          subTotal: total,
        },
        {
          headers: {
            token: token,
          },
        }
      );

      console.log(response);

      if (response.status === 200) {
        dispatch(emptyCart());
        toast.success("Order placed successfully!");
        console.log("reduce stock");
      } else {
        toast.error(`Failed to place order:`);
      }
    } catch (error) {
      toast.error("There was an error placing the order.");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  useEffect(() => {
    if (shippingInfo.address === "") return navigate("/cart");
  }, [shippingInfo]);

  return (
    <div className="container px-4 py-8 mx-auto min-h-96 md:px-16 lg:px-24">
      <h3 className="mb-4 text-3xl font-semibold text-center">Checkout Now</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-between mt-8 space-x-10 md:flex-row">
          <div className="md:w-2/3">
            <ToggleSection
              title="User Information"
              isOpen={userInfoToggle}
              onToggle={() => setUserInfoToggle(!userInfoToggle)}
            >
              <InputField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </ToggleSection>

            <ToggleSection
              title="Shipping Information"
              isOpen={shippingToggle}
              onToggle={() => setShippingToggle(!shippingToggle)}
            >
              <InputField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </ToggleSection>

            <ToggleSection
              title="Payment Method"
              isOpen={paymentToggle}
              onToggle={() => setPaymentToggle(!paymentToggle)}
            >
              <select
                name="method"
                value={formData.method}
                onChange={handleInputChange}
                className="w-full px-2 py-2 border border-2px sm:px-3"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="ONLINE">Online Payment</option>
              </select>
            </ToggleSection>
          </div>

          <OrderSummary total={total} formData={formData} />
        </div>
      </form>
    </div>
  );
};

const ToggleSection = ({ title, isOpen, onToggle, children }) => (
  <div className="p-2 mb-6 border">
    <div
      className="flex items-center justify-between mx-4 mt-2 cursor-pointer"
      onClick={onToggle}
    >
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      {isOpen ? <FaAngleUp /> : <FaAngleDown />}
    </div>
    <div className={`space-y-4 ${isOpen ? "" : "hidden"}`}>{children}</div>
  </div>
);

const InputField = ({ label, name, value, onChange }) => (
  <div className="m-4">
    <label className="block mb-2 text-gray-400" htmlFor={name}>
      {label}
    </label>
    <input
      type="text"
      name={name}
      placeholder={`Enter Your ${label}`}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-2px"
    />
  </div>
);

const OrderSummary = ({ formData, total }) => (
  <div className="p-6 bg-white border rounded-lg shadow-md md:w-1/3">
    <h3 className="mb-4 text-xl font-semibold">Order Summary</h3>
    <div className="mb-4">
      <p>Phone: {formData.phone}</p>
      <p>Address: {formData.address}</p>
      <p>Total Amount To Pay: {total}</p>
      <p>Payment Method: {formData.method}</p>
    </div>
    <button
      type="submit"
      className="w-full px-4 py-4 mt-4 text-xl font-bold text-white bg-black"
    >
      Place Order
    </button>
  </div>
);

export default Checkout;
