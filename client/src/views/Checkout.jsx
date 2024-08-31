// /* eslint-disable react/prop-types */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { emptyCart } from "../features/productCart/productCart";
// import { useNavigate } from "react-router-dom";
// import { server } from "../store/store"

// const Checkout = () => {
//   const [method, setMethod] = useState("")
//   const navigate = useNavigate();

//   const {
//     shippingInfo,
//     cartItems,
//     subtotal,
//     tax,
//     discount,
//     shippingCharges,
//     total,
//   } = useSelector((state) => state.cartReducer);

//   const dispatch = useDispatch();

//   const paymentCod = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("You are not logged in!");
//         return;
//       }

//       const response = await axios.post("http://localhost:4000/api/order/new/cod",
//         {
//           items: cartItems,
//           method,
//           phone: shippingInfo.phone,
//           shippingInfo,
//           subTotal: total,
//         },
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       console.log("cod response", response);

//       if (response.status === 200 || response.data.message ===
//         "Order placed successfully") {
//         dispatch(emptyCart());
//         toast.success("Order placed successfully!");
//         console.log("reduce stock");
//       } else {
//         toast.error(`Failed to place order:`);
//       }
//     } catch (error) {
//       toast.error("There was an error placing the order.");
//       console.error(
//         "Error:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const paymentOnline = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       console.log(token)
//       if (!token) {
//         toast.error("You are not logged in!");
//         return;
//       }

//       const { data: { order, orderOptions } } = await axios.post("http://localhost:4000/api/order/new/online",
//         {
//           items: cartItems,
//           method,
//           phone: shippingInfo.phone,
//           shippingInfo,
//           subTotal: total,
//         },
//         {
//           headers: {
//             token: token,
//           },
//         }
//       );

//       console.log("online response", order, orderOptions);
//       const options = {
//         key: "rzp_live_uZqf3G3ZLTSKbH",
//         amount: order.amount,
//         image: "http://localhost:5173/src/assets/gangstaaLogo.png",
//         currency: "INR",
//         name: "Gangstaa", //your business name
//         description: "Clothing Brand",
//         order_id: order.id,
//         handler: async function (response) {
//           const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
//             response;

//           try {
//             const { data } = await axios.post("http://localhost:4000/api/order/new/payment",
//               {
//                 razorpay_payment_id,
//                 razorpay_order_id,
//                 razorpay_signature,
//                 orderOptions,
//               },
//               {
//                 headers: {
//                   token: localStorage.getItem("token"),
//                 },
//               }
//             );
//             toast.success(data.message);
//             setLoading(false);
//           } catch (error) {
//             toast.error(error.response.data.message);
//             setLoading(false);
//           }
//         },

//         theme: {
//           color: "#b35900",
//         },
//       };

//       const razorpay = new window.Razorpay(options);

//       razorpay.open();

//     } catch (error) {
//       console.error(error.message)
//     }
//   }

//   useEffect(() => {
//     if (shippingInfo.address === "") return navigate("/cart");
//   }, [shippingInfo]);

//   return (
//     <div className="mb-10">
//     <h2 className="text-center text-2xl font-bold mt-6 mb-7 text-gray-800">
//       Proceed to Payment
//     </h2>
//     <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start justify-center">
//       <aside className="flex flex-wrap items-center justify-center gap-10 bg-white p-6 rounded-lg shadow-lg w-[70%] overflow-hidden">
//         {cartItems.map((item) => (
//           <div className="flex" key={item.productId}>
//             <div className="flex flex-col items-center">
//               <div className="w-[15rem] h-[15rem] mb-6 border rounded-lg overflow-hidden shadow-md">
//                 <img
//                   className="w-full h-full object-contain"
//                   src={`${server}/${item.photo}`}
//                   alt={item.name}
//                 />
//               </div>
//               <div className="text-center font-medium text-lg text-gray-700">
//                 {item.name}
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="text-center mt-6 w-full">
//           <h5 className="font-bold text-xl text-gray-800">
//             Total Payable Amount: Rs {total}
//           </h5>
//           <p className="mt-2 text-gray-600">
//             Delivery Address: {shippingInfo.address}, {shippingInfo.city},{" "}
//             {shippingInfo.state}
//           </p>
//         </div>

//       </aside>
//       <aside className="w-[18rem] h-[20rem] p-6 flex flex-col justify-between border-2 border-gray-300 rounded-lg shadow-lg bg-gray-50 max-w-full lg:ml-8">
//         <select
//           value={method}
//           onChange={(e) => setMethod(e.target.value)}
//           className="p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
//         >
//           <option className="text-gray-500">Choose Payment Method</option>
//           <option value="cod">Cash on Delivery</option>
//           <option value="online">Online Payment</option>
//         </select>
//         <button
//           onClick={method === "cod" ? paymentCod : paymentOnline}
//           className="mt-6 py-3 px-6 bg-black text-white font-semibold rounded-lg transition duration-300"
//         >
//           Proceed
//         </button>
//       </aside>
//     </div>
//   </div>
  

  
//   );
// }

// export default Checkout;
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../features/productCart/productCart";
import { useNavigate } from "react-router-dom";
import { server } from "../store/store";
import './Checkout.css';
const Checkout = () => {
  const [method, setMethod] = useState(""); 
  const [showConfirmation, setShowConfirmation] = useState(false);
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

  const handleConfirmCOD = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/api/order/new/cod",
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

      if (response.status === 200 || response.data.message === "Order placed successfully") {
        dispatch(emptyCart());
        toast.success("Order placed successfully!");
        console.log("reduce stock");
        navigate("/order/success");
      } else {
        toast.error(`Failed to place order: ${response.data.message}`);
      }
    } catch (error) {
      toast.error("There was an error placing the order.");
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  const paymentCod = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (method === "cod") {
      paymentCod(e);
    } else {
      paymentOnline(e);
    }
  };

  const paymentOnline = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      if (!token) {
        toast.error("You are not logged in!");
        return;
      }

      const {
        data: { order, orderOptions },
      } = await axios.post(
        "http://localhost:4000/api/order/new/online",
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
        key: "rzp_live_uZqf3G3ZLTSKbH",
        amount: order.amount,
        image: "http://localhost:5173/src/assets/gangstaaLogo.png",
        currency: "INR",
        name: "Gangstaa", //your business name
        description: "Clothing Brand",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

          try {
            const { data } = await axios.post(
              "http://localhost:4000/api/order/new/payment",
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
          } catch (error) {
            toast.error(error.response.data.message);
          }
        },

        theme: {
          color: "#b35900",
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (shippingInfo.address === "") return navigate("/cart");
  }, [shippingInfo]);

  return (
    <div className="mb-10">
      <h2 className="text-center text-2xl font-bold mt-6 mb-7 text-gray-800">
        Proceed to Payment
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-start justify-center">
        <aside className="flex flex-wrap items-center justify-center gap-10 bg-white p-6 rounded-lg shadow-lg w-[70%] overflow-hidden">
          {cartItems.map((item) => (
            <div className="flex" key={item.productId}>
              <div className="flex flex-col items-center">
                <div className="w-[15rem] h-[15rem] mb-6 border rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-contain"
                    src={`${server}/${item.photo}`}
                    alt={item.name}
                  />
                </div>
                <div className="text-center font-medium text-lg text-gray-700">
                  {item.name}
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-6 w-full">
            <h5 className="font-bold text-xl text-gray-800">
              Total Payable Amount: Rs {total}
            </h5>
            <p className="mt-2 text-gray-600">
              Delivery Address: {shippingInfo.address}, {shippingInfo.city},{" "}
              {shippingInfo.state}
            </p>
          </div>
        </aside>
        <aside className="w-[18rem] h-[20rem] p-6 flex flex-col justify-between border-2 border-gray-300 rounded-lg shadow-lg bg-gray-50 max-w-full lg:ml-8">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="p-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option className="text-gray-500">Choose Payment Method</option>
            <option value="cod">Cash on Delivery</option>
            <option value="online">Online Payment</option>
          </select>
          <button
            onClick={handlePayment}
            className="mt-6 py-3 px-6 bg-black text-white font-semibold rounded-lg transition duration-300"
          >
            Proceed
          </button>
        </aside>
      </div>

     

{showConfirmation && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg popup-container">
      <h3 className="text-xl font-semibold mb-4">Confirm Cash on Delivery</h3>
      <p>Do you want to proceed with Cash on Delivery?</p>
      <div className="mt-4 flex justify-end gap-4">
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => {
            setShowConfirmation(false);
            handleConfirmCOD();
          }}
        >
          Yes
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => setShowConfirmation(false)}
        >
          No
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Checkout;
