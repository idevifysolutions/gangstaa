import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderDetails from "../../components/admin/OrderDetails";
import axios from "axios";
import Loader from "../../components/admin/Loader";

const Orders = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);
  const [allOrders, setAllOrders] = useState([]);
  const [oneOrderInfo, setOneOrderInfo] = useState();
    const [isOpen, setIsOpen] = useState(null); // Track the open state of dropdown by index
  const [loading, setLoading] = useState(false);

  const toggleDropdown = (index) => {
    setIsOpen((prev) => (prev === index ? null : index));
  };

  async function fetchAllOrders() {
    try {
      setLoading((prev) => !prev); 
      const { data } = await axios.get(
        `http://localhost:4000/api/order/admin/all`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setAllOrders(data.orders);
      setLoading((prev) => !prev); 
    } catch (error) {
      console.log(error);
      setLoading((prev) => !prev); 
    }
  }

  useEffect(() => {
    fetchAllOrders();
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

  const updateStatus = async (id, newStatus, index) => {
    if (confirm("Are you sure you want to update the status of this order?")) {
      try {
        const { data } = await axios.put(
          `http://localhost:4000/api/order/${id}`,
          { status: newStatus },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );

        alert(data.message);
        fetchAllOrders(); // Re-fetch orders after update

        toggleDropdown(index);
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };

  return (

    <>
    {
      loading ? <Loader/> :
    
      <div className="relative flex h-full">
        <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />

        <div className="h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full h-10 p-6 border shadow-md headerbar shadow-gray-200">
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
             
          {
            allOrders.length > 0? 
            <main className="flex-grow">
            <div className="items-center justify-center w-full h-full overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                    <th className="px-6 py-3 text-center">Name</th>
                    <th className="px-6 py-3 text-center">Total</th>
                    <th className="px-6 py-3 text-center">Phone</th>
                    <th className="px-6 py-3 text-center">Quantity</th>
                    <th className="px-6 py-3 text-center">Update Status</th>
                    <th className="px-6 py-3 text-center">More Info</th>
                  </tr>
                </thead>

                
                  <tbody className="text-sm font-light text-gray-600">
                  {allOrders.map((order, index) => (

                    <tr
                      className="border-b border-gray-200 hover:bg-gray-100"
                      key={index}
                    >
                      <td className="px-6 py-3 text-center">
                        {order?.user?.name}
                      </td>

                      <td className="px-6 py-3 text-center">₹ {order.subTotal}</td>

                      <td className="px-6 py-3 text-center">{order.phone}</td>
                      <td className="px-6 py-3 text-center">
                        {order.items.length}
                      </td>

                      <td className="flex items-center justify-between gap-2 px-6 py-3">
                        <p>{order.status}</p>

                        <div className="relative inline-block text-left">
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="inline-flex justify-center w-full px-4 py-2 bg-black text-white font-medium text-sm rounded-md"
                          >
                            Update
                          </button>

                          {isOpen === index && (
                            <div className="absolute right-0 z-50 mt-2 w-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                              <div className="py-1">
                                <button
                                  onClick={() => updateStatus(order._id, "Pending", index)}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Pending
                                </button>
                                <button
                                  onClick={() => updateStatus(order._id, "Processing", index)}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Processing
                                </button>
                                <button
                                  onClick={() => updateStatus(order._id, "Shipped", index)}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Shipped
                                </button>
                                <button
                                  onClick={() => updateStatus(order._id, "Delivered", index)}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  Delivered
                                </button>
                              </div>
                            </div>
                          )}

                        </div>
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
                  ))}
                </tbody> 

                


              </table>
            </div>
          </main>  : <div>No Orders Found</div>
          }   
          


        </div>
      </div>
    }
      {manageOrder && (
        <OrderDetails orderInfo={oneOrderInfo} onClose={handleClose} />
      )}
    </>
  );
};

export default Orders;
