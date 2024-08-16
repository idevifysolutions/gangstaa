import React, { useEffect, useState } from "react";
import { CartData } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { RiSecurePaymentLine } from "react-icons/ri";
import toast from "react-hot-toast";
// import Loader from "../components/Loader";

const Payment = () => {
  const { cart, subTotal, fetchCart } = CartData();
  const [address, setAddress] = useState(null);
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const params = useParams();

  async function fetchAddress() {
    try {
      const { data } = await axios.get(`${server}/api/address/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setAddress(data.address);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAddress();
  }, []);

  const paymentCod = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/api/order/new/cod`,
        {
          method,
          phone: address.phone,
          address: address.address,
        },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setLoading(false);
      toast.success(data.message);
      fetchCart();
      navigate("/ordersuccess");
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  const paymentOnline = async () => {
    setLoading(true);
    const {
      data: { order, orderOptions },
    } = await axios.post(
      `${server}/api/order/new/online`,
      {
        method,
        phone: address.phone,
        address: address.address,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    const options = {
      key: "rzp_test_yOMeMyaj2wlvTt",
      amount: order.subTotal,
      currency: "INR",
      name: "Let's Negotiate", // your business name
      description: "India will negotiate",
      order_id: order.id,
      handler: async function (response) {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
          response;

        try {
          const { data } = await axios.post(
            `${server}/api/payment`,
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
          navigate("/ordersuccess");
          toast.success(data.message);
          fetchCart();
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
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container p-4 mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-center">
            Proceed to Payment
          </h2>

          <h6 className="text-lg font-semibold">Products</h6>

          {cart &&
            cart.map((e, i) => (
              <div
                className="flex items-center justify-between gap-4 p-2 border-b border-gray-300"
                key={i}
              >
                <img
                  src={`${server}/${e.product.image}`}
                  alt=""
                  className="object-cover w-16 h-16"
                />
                <p className="flex-1">{e.product.title}</p>
                <p className="font-semibold text-gray-700">
                  ₹{e.product.price}
                </p>
                <p className="text-gray-500">Quantity - {e.quantity}</p>
              </div>
            ))}

          <div className="mt-4 text-lg font-semibold">
            Total price to be paid - ₹{subTotal}
          </div>

          {address && (
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-bold">Address:</span> {address.address}
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Phone:</span> {address.phone}
              </p>
            </div>
          )}

          <div className="mt-4">
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option>Choose Payment Method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="online">Online Payment</option>
            </select>
          </div>

          <button
            onClick={method === "cod" ? paymentCod : paymentOnline}
            className="flex items-center justify-center w-full p-3 mt-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Proceed <RiSecurePaymentLine className="ml-2" />
          </button>
        </div>
      )}
    </>
  );
};

export default Payment;
