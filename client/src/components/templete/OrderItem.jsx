import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../../store/store";

const OrderPage = () => {
  const [order, setOrder] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  async function fetchOrder() {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/order/${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setOrder(data.order);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <>
      {order && (
        <div className="max-w-6xl p-4 mx-auto ">
          <h4 className="my-4 text-3xl font-semibold text-center text-black">
            Order Details
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-300">
              <thead>
                <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-left">Price</th>
                  <th className="px-6 py-3 text-center">Image</th>
                  <th className="px-6 py-3 text-left">Quantity</th>
                  <th className="px-6 py-3 text-left">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm font-light text-gray-600">
                {order.items &&
                  order.items.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="px-6 py-3 text-left whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-3 text-left">{item.name}</td>
                      <td className="px-6 py-3 text-left">₹{item.price}</td>
                      <td className="px-6 py-3 text-center">
                        <img
                          src={`${server}/${item.photo}`}
                          alt={item.name}
                          className="object-cover w-12 h-12 rounded"
                        />
                      </td>
                      <td className="px-6 py-3 text-left">{item.quantity}</td>
                      <td className="px-6 py-3 text-left">
                        ₹{item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <h5 className="text-lg font-semibold text-black">
              Subtotal - ₹{order.subTotal}
            </h5>
            <h5 className="text-lg font-semibold text-black">
              Payment Method - {order.method}
            </h5>
            <h5 className="text-lg font-semibold text-black">
              Status - {order.status}
            </h5>
            {order.paymentInfo && (
              <h5 className="text-lg font-semibold text-black">
                Payment ID - {order.paymentInfo}
              </h5>
            )}
          </div>

          <div className="mt-4 text-center">
            <button
              className="px-4 py-2 text-white transition duration-300 bg-black rounded-md hover:bg-black"
              onClick={() => navigate("/catagery/myorder")}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPage;
