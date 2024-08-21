import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderDetails from "../../components/admin/OrderDetails";
import axios from "axios";

const Orders = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);
  const [allOrders, setAllOrders] = useState([]);
  const [oneOrderInfo, setOneOrderInfo] = useState();

  async function fetchAllOrders() {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/order/admin/all`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setAllOrders(data.orders);
      console.log("allorders", data.orders);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
    console.log(allOrders);
  }, []);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const handlemanageOrder = (id) => {
    const oneOrderInfo = allOrders.filter((order) => order._id === id);

    setOneOrderInfo(oneOrderInfo);
    setManageOrder((prev) => !prev);
  };

  const handleClose = () => {
    setManageOrder((prev) => !prev);
  };

  const updateStatus = async (id) => {
    if (confirm("Are you sure you want to update status of this order")) {
      try {
        const { data } = await axios.put(
          `http://localhost:4000/api/order/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        alert(data.message);
        fetchAllOrders();
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="relative flex h-full">
        <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />

        <div className="h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full h-10 p-6 border shadow-md headerbar shadow-slate-400">
            <div
              className="block cursor-pointer lg:hidden"
              onClick={handleSideBar}
            >
              <RxHamburgerMenu className="text-2xl" />
            </div>
            <div className="flex-grow py-3 text-xl font-bold text-center lg:text-left">
              Orders
            </div>
          </div>

          <main className="flex-grow">
            <div className="items-center justify-center w-full h-full overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                    <th className="px-6 py-3 text-center">Name</th>
                    <th className="px-6 py-3 text-center">Total</th>
                    <th className="px-6 py-3 text-center">Phone</th>
                    <th className="px-6 py-3 text-center">Quantity</th>
                    <th className="px-6 py-3 text-center"> Update Status</th>
                    <th className="px-6 py-3 text-center">More Info</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-600">
                  {allOrders.map((order, index) => {
                    return (
                      <tr
                        className="border-b border-gray-200 hover:bg-gray-100"
                        key={index}
                      >
                        <td className="px-6 py-3 text-center">
                          {order.user.name}
                        </td>

                        <td className="px-6 py-3 text-center">
                          {order.subTotal}
                        </td>

                        <td className="px-6 py-3 text-center">{order.phone}</td>
                        <td className="px-6 py-3 text-center">
                          {" "}
                          {order.items.length}
                        </td>

                        <td className="flex items-center justify-between gap-2 px-6 py-3 cursor-pointer">
                          <p> {order.status}</p>
                          <button
                            className="p-2 text-white bg-black rounded-md"
                            onClick={() => updateStatus(order._id)}
                          >
                            Update Status
                          </button>
                        </td>

                        <td className="px-6 py-3 cursor-pointer">
                          <div className="flex items-center justify-center">
                            <button
                              className="p-2 text-white bg-black rounded-md"
                              onClick={() => handlemanageOrder(order._id)}
                            >
                              More Info
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
      {manageOrder && (
        <OrderDetails orderInfo={oneOrderInfo} onClose={handleClose} />
      )}
    </>
  );
};

export default Orders;
