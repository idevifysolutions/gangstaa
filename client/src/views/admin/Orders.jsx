import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderDetails from "../../components/admin/OrderDetails";
import axios from "axios";

const Orders = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);
  const [allOrders, setAllOrders] = useState([]);

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
      console.log(allOrders)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const handlemanageOrder = () => {
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
          <div className="headerbar h-20 w-full border flex items-center justify-between shadow-md shadow-slate-400 px-4">
            {/* Sidebar toggle for mobile */}
            <div
              className="lg:hidden block cursor-pointer"
              onClick={handleSideBar}
            >
              <RxHamburgerMenu className="text-2xl" />
            </div>

            {/* Main header content */}
            <div className="h-full w-full flex items-center justify-between">
              <div className="text-3xl font-bold flex-grow lg:text-xl text-center lg:text-left py-2">
                Orders
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Header row */}
            <div className="hidden md:flex w-full items-center justify-between border-[2px] border-slate-400 p-4 my-2 rounded-md bg-gray-100">
              <div className="heading text-lg flex-1 text-center">Name</div>
              <div className="heading text-lg flex-1 text-center">Total</div>
              <div className="heading text-lg flex-1 text-center">Discount</div>
              <div className="heading text-lg flex-1 text-center">Quantity</div>
              <div className="heading text-lg flex-1 text-center">
                Update Status
              </div>
              <div className="heading text-lg flex-1 text-center">
                More Info
              </div>
            </div>

            {/* Order row */}

            { allOrders.map((order, index) => {
              return (
                <div className="flex flex-col md:flex-row w-full items-center justify-between border-[2px] border-slate-400 border-t-0 p-4 my-2 rounded-md shadow-md" key={index}>
                  <div className="text-lg flex-1 text-center mb-2 md:mb-0">
                    Prakash Ghorpade
                  </div>
                  <div className="text-lg flex-1 text-center mb-2 md:mb-0">
                    {order.subTotal}
                  </div>
                  <div className="text-lg flex-1 text-center mb-2 md:mb-0">
                    500
                  </div>
                  <div className="text-lg flex-1 text-center mb-2 md:mb-0">
                    {order.items.length}
                  </div>

                  <div className="xl:flex  xl:flex-row flex sm:flex-col sm:flex-1 items-center justify-center gap-2 mb-2 md:mb-0">
                    <div
                      required
                      name="category"
                      className="p-2 bg-slate-100 border rounded w-full md:w-auto"
                    >
                      <p>{order.status}</p>
                    </div>

                    <button
                      onClick={() => updateStatus(order._id)}
                      className="p-2 bg-blue-500 text-white rounded-md w-full md:w-auto"
                    >
                      Update
                    </button>
                  </div>

                  <div className="text-lg flex-1 text-center cursor-pointer  rounded-md mt-4 md:mt-0 md:ml-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full md:w-auto" onClick={handlemanageOrder}>
                      Info
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {manageOrder && <OrderDetails onClose={handlemanageOrder} />}
    </>
  );
};

export default Orders;
