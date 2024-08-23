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
  const [method, setMethod] = useState("")
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

  const dispatch = useDispatch();

  const paymentCod = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      const response = await axios.post("http://localhost:4000/api/order/new/cod",
        {
          items: cartItems,
          method,
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

      console.log("cod response", response);

      if (response.status === 200 || response.data.message ===
        "Order placed successfully") {
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

  const paymentOnline = async (e) => {
    e.preventDefault();
    // try {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      // const response = await axios.post("http://localhost:4000/api/order/new/online",
      //   {
      //     items: cartItems,
      //     method,
      //     phone: shippingInfo.phone,
      //     shippingInfo,
      //     subTotal: total,
      //   },
      //   {
      //     headers: {
      //       token: token,
      //     },
      //   }
      // );

      // console.log("online response", response);

      // const options = {
      //   key: "rzp_test_yOMeMyaj2wlvTt",
      //   amount: order.subTotal,
      //   currency: "INR",
      //   name: "Let's Negotiate", //your business name
      //   description: "India will negotiate",
      //   order_id: order.id,
      //   handler: async function (response) {
      //     const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      //       response;

      //     try {
      //       const { data } = await axios.post("http://localhost:4000/api/order/new/payment",
      //         {
      //           razorpay_payment_id,
      //           razorpay_order_id,
      //           razorpay_signature,
      //           orderOptions,
      //         },
      //         {
      //           headers: {
      //             token: localStorage.getItem("token"),
      //           },
      //         }
      //       );
      //       navigate("/ordersuccess");
      //       toast.success(data.message);
      //       fetchCart();
      //       setLoading(false);
      //     } catch (error) {
      //       toast.error(error.response.data.message);
      //       setLoading(false);
      //     }
      //   },

      //   theme: {
      //     color: "#9e1163",
      //   },
      // };

      // const razorpay = new window.Razorpay(options);

      // razorpay.open();


      // if (response.status === 200 || response.data.message ===
      //   "Order placed successfully") {
      //   dispatch(emptyCart());
      //   toast.success("Order placed successfully!");
      //   console.log("reduce stock");
      // } else {
      //   toast.error(`Failed to place order:`);
      // }
    // } 
    // catch (error) {
    //   toast.error("There was an error placing the order.");
    //   console.error(
    //     "Error:",
    //     error.response ? error.response.data : error.message
    //   );
    // }
  }

  useEffect(() => {
    if (shippingInfo.address === "") return navigate("/cart");
  }, [shippingInfo]);

  return (
    <>
      <h2>Proceed to payment</h2>
      <h5>Products</h5>

      {cartItems.map((item) => (
        <div key={item.productId}>
          <h2><span>{item.quantity}</span>{item.name}</h2>
          <div>
          </div>
        </div>
      ))}
      {shippingInfo.address} {shippingInfo.city} {shippingInfo.state}
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option>Choose Payment Method</option>
        <option value="cod">Cash on Delivery</option>
        <option value="online">Online Payment</option>
      </select>
      <button onClick={method === "cod" ? paymentCod : paymentOnline}>
        Proceed
      </button>
    </>
  );
}

export default Checkout;
