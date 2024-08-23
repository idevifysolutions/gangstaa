import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyOrder from "./images/empty.jpeg";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  async function fetchOrders() {
    try {
      const { data } = await axios.get("http://localhost:4000/api/order/all", {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log(data);

      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(localStorage.getItem("token"));

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <main className="flex flex-col items-center justify-start h-screen p-4">
      {orders && orders.length > 0 ? (
        <div className="w-full p-4 overflow-x-auto bg-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-center">My Orders</h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Method</th>
                <th className="px-6 py-3 text-left">Subtotal</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Address</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {orders.map((e, i) => {
                const shippingInfo = e.shippingInfo || {};
                const { address, city, state, country, pinCode } = shippingInfo;

                return (
                  <tr
                    key={i}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="px-6 py-3 text-left">{i + 1}</td>
                    <td className="px-6 py-3 text-left">{e.method}</td>
                    <td className="px-6 py-3 text-left">{e.subTotal}</td>
                    <td className="px-6 py-3 text-left">{e.status}</td>
                    <td className="px-6 py-3 text-left">{`${address || ""}, ${
                      city || ""
                    }, ${state || ""}, ${country || ""}, ${pinCode || ""}`}</td>
                    <td className="px-6 py-3 text-left">{e.phone}</td>

                    <td className="px-6 py-3 text-left">
                      <button
                        className="px-4 py-2 text-lg text-white bg-black rounded-md"
                        onClick={() => navigate(`/category/myorder/${e._id}`)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full p-4 text-center">
          <img
            src={EmptyOrder}
            alt="No Orders"
            className="w-1/2 max-w-sm mb-6"
          />
          <h1 className="mb-4 text-4xl font-bold text-black lg:text-6xl">
            No Orders Yet!
          </h1>
          <p className="text-xl text-gray-800">
            Your order history will appear here.
          </p>
        </div>
      )}
    </main>
  );
};

export default Orders;
