import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <main className="flex flex-col min-h-screen">
      <h1 className="mt-8 mb-8 text-3xl font-bold text-center">My Orders</h1>
      {orders && orders.length > 0 ? (
        <div className="items-center justify-center w-full h-full p-2 overflow-x-auto lg:p-8">
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
                        className="px-4 py-2 text-lg text-white bg-black"
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
        <p className="mt-4 text-gray-500">No Orders Yet</p>
      )}
    </main>
  );
};

export default Orders;
