import React from "react";
import { MdDashboard } from "react-icons/md";
import { HiShoppingBag } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa6";
import { RiCoupon3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminSidebar = (props) => {
    
   const {showsidebar,  handleSideBar} = props.sidebar;
   
   
  return (
    < >
    <div className={`h-[100vh] w-auto bg-slate-50 ${showsidebar? "block" : "hidden" } lg:block  absolute lg:relative z-40`}> 
      <div className="adminsidebarcontainer w-72 h-[100vh]  overflow-y-scroll hide-scrollbar">
        <aside className="w-[100%]  p-4 z-10  bg-white">
          <div>
            <h1 className="text-2xl font-bold">Logo.</h1>
          </div>

          <div className="flex">
            <div className="item flex-1 mx-4 mt-6">
              <h1 className="font-thin uppercase opacity-80 my-4 tracking-wider text-slate-900 text-[16px] ">
                Dashboard
              </h1>

              <ul className="flex flex-col gap-2 ">
              <Link to="/admin/dashboard">  <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <MdDashboard />
                  </span>
                 <span>DashBoard</span>
                </li> </Link> 

                <Link to="/admin/products">  <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <HiShoppingBag />
                  </span>
                <span>product</span> 
                </li> </Link> 
                
                <Link to="/admin/customers">   <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <IoIosPeople />
                  </span>
                 <span>Customer</span>  
                </li></Link>

                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <IoNewspaperSharp />
                  </span>
                  <span>Orders</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex ">
            <div className="item flex-1 mx-4 mt-6">
              <h1 className="font-thin uppercase opacity-80 my-4 tracking-wider text-slate-900 text-[16px]">
                charts
              </h1>

              <ul className="flex flex-col gap-2 ">
                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <FaChartBar />
                  </span>
                  <span>bar</span>
                </li>
                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <FaChartLine />
                  </span>
                  <span>line </span>
                </li>
                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <FaChartPie />
                  </span>
                  <span>pie</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex ">
            <div className="item flex-1 mx-4 my-6">
              <h1 className="font-thin uppercase opacity-80 my-4 tracking-wider text-[16px] text-slate-900">
                Apps
              </h1>

              <ul className="flex flex-col gap-2 ">
                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <FaStopwatch />
                  </span>
                  <span>Stopwatch </span>
                </li>
                <li className="px-4 py-2 rounded-[10px] hover:bg-blue-100 hover:text-blue-600 capitalize text-black flex items-center gap-4 hover:cursor-pointer tracking-wide" onClick={handleSideBar}>
                  <span>
                    <RiCoupon3Fill />
                  </span>
                  <span>cupon </span>
                </li>
              </ul>

            </div>
          </div>
        </aside>
      </div>
      </div>
    </>
  );
};

export default AdminSidebar;