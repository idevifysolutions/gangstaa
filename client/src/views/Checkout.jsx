/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../features/productCart/productCart";
import { useNavigate } from "react-router-dom";
import { server } from "../store/store"

const Checkout = () => {
  const [method, setMethod] = useState("")
  const navigate = useNavigate();

  const {
    shippingInfo,
    cartItems,
    subtotal,
    tax,
    discount,
    shippingCharges,
    total,
  } = useSelector((state) => state.cartReducer);

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
    try {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      const { data: { order, orderOptions } } = await axios.post("http://localhost:4000/api/order/new/online",
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

      console.log("online response", order, orderOptions);
      const options = {
        key: "rzp_test_yOMeMyaj2wlvTt",
        amount: order.amount,
        currency: "INR",
        name: "Let's Negotiate", //your business name
        description: "India will negotiate",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
            response;

          try {
            const { data } = await axios.post("http://localhost:4000/api/order/new/payment",
              {
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature,
                orderOptions,
              },
              {
                headers: {
                  token: localStorage.getItem("token"),
                },
              }
            );
            toast.success(data.message);
            setLoading(false);
          } catch (error) {
            toast.error(error.response.data.message);
            setLoading(false);
          }
        },

        theme: {
          color: "#9e1163",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    if (shippingInfo.address === "") return navigate("/cart");
  }, [shippingInfo]);

  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-7">Proceed to payment</h2>
      <div className="flex flex-col gap-6 lg:flex-row md:gap-4 items-center justify-center">
        <aside className="flex flex-col md:flex-row items-center justify-center gap-7">
          {cartItems.map((item) => (
            <div className="flex" key={item.productId}>
             <div className="flex flex-col items-center">
              <div className="w-[15rem] h-[15rem] mb-10">
                <img className="w-full h-full" src={`${server}/${item.photo}`} alt="" />
              </div>
              <div>
                {item.name}
              </div>
             </div>
            </div>
          ))}
          <h5 className="font-bold"> Total Payable Amount: Rs {total}</h5>
          <p className="text-center px-11 font-bold">Delivery Address : {shippingInfo.address} {shippingInfo.city} {shippingInfo.state}</p>
        </aside>
        <aside className=" w-[15rem] h-[15rem] flex flex-col justify-between border-2 border-black">

          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>Choose Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
          <button onClick={method === "cod" ? paymentCod : paymentOnline}>
            Proceed
          </button>
        </aside>
      </div>
    </>
  );
}

export default Checkout;
