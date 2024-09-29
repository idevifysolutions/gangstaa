import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { BsSearch } from 'react-icons/bs'
import { BiMaleFemale } from "react-icons/bi";
import { FaRegBell } from 'react-icons/fa'
import Table from "../../components/admin/DashboardTable"
import data from "../../assets/data.json"
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi"
import { BarChart, DoughnutChart } from '../../components/admin/Charts'
import { RxHamburgerMenu } from 'react-icons/rx';
import axios from 'axios';
import { ProductData } from '../../context/ProductContext';

const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp";


const Dashboard = () => {
     
    const { adminProducts } = ProductData();
 
    const [allOrders, setAllOrders] = useState([]);
    const [allUsers, setAllusers] = useState([]);

 
async function fetchAllOrders() {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/order/admin/all`, 
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setAllOrders(data.orders);
      console.log( "allorders", data.orders)

    } catch (error) {
      console.log(error);
    }
  }


  const getAllusers = async () => {
    try {
      const data = axios.get(`${import.meta.env.VITE_SERVER}/api/user/getall`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const Allusers = await data;
      setAllusers(Allusers.data.data);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };


  useEffect(() => {
       fetchAllOrders();
       getAllusers();
  },[])



    const [showsidebar, setShowsidebar] = useState(false);

    const handleSideBar = () => {
        setShowsidebar((prev) => !prev);
        console.log(showsidebar)
      }

    return (
        <div className='h-full flex relative'>
            <AdminSidebar sidebar={{showsidebar, handleSideBar}} />
            <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
                      
                      <RxHamburgerMenu  className='text-2xl m-2'/>

                  </div>
            <main className='dashboard w-full overflow-y-auto'>
           

                {/* <div className="bar h-[4rem] flex justify-center items-center gap-[1rem] py-0 px-[1rem] border-b-2 border-black">
                    <BsSearch className='text-[1.2rem] opacity-[0.7]' />
                    <input className='mr-auto w-full py-[1rem] px-0 outline-none border-none' type="text" placeholder="Search for data, users, docs" />
                    <FaRegBell className='text-[1.2rem] opacity-[0.7]' />
                    <img className='h-[2rem] w-[2rem] rounded-[50%]' src={userImg} alt="User" />
                </div> */}

                <section className='widget-container flex flex-wrap justify-center lg:justify-between items-stretch py-[2rem] px-[2rem]'>
                    {/* <WidgetItem
                        percent={30}
                        amount={true}
                        value={20}
                        heading="Revenue"
                        color="rgb(0, 115, 255)"
                    /> */}
                    <WidgetItem
                        percent={50}
                        amount={true}
                        value={adminProducts.length}
                        heading="Products"
                        color="rgb(115, 0, 255)"
                    />
                    <WidgetItem
                        percent={50}
                        amount={true}
                        value={allUsers.length}
                        heading="Users"
                        color="rgb(0, 115, 255)"
                    />
                    <WidgetItem
                        percent={50}
                        amount={true}
                        value={allOrders.length}
                        heading="Orders"
                        color="rgb(255, 115, 73)"
                    />
                </section>

                {/* <section className='graph-container flex flex-col sm:flex-col md:flex-col lg:flex-row gap-[2rem] pr-[2rem] pb-[2rem]'>
                    <div className="revenue-chart bg-white rounded-[10px] w-full py-[1rem] px-[3rem]  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                        
                        <h2 className='uppercase text-center mt-[1rem] mb-[2rem] ml-[0.25rem] font-bold tracking-wider text-2xl'>Revenue And Orders</h2>
                        <BarChart
                            data_1={[12, 20, 89, 5, 33, 76, 25]}
                            data_2={[23, 123, 32, 22, 45, 34, 65]}
                            title_1="Revenue"
                            title_2="Transaction"
                            bgColor_1="rgb(3, 102, 252)"
                            bgColor_2="rgba(252, 3, 215, 0.8)"
                        />
                    </div>
                    <div className="dashboard-categories bg-white rounded-[10px] w-full max-w-[18rem] flex flex-col pt-[2rem] m-auto  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
                        <h2 className='uppercase text-center mt-[1rem] mb-[2rem] ml-[0.25rem] font-bold tracking-wider text-2xl'>Inventory</h2>

                        <div className='bg-white rounded-[10px] overflow-y-auto h-[40rem] pl-[0.5rem]'>
                            {data.categories.map((item, index) => {
                                return (
                                    <CategoryItem
                                        key={index}
                                        value={item.value}
                                        heading={item.heading}
                                        color="gray"
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section> */}

                <section className='transaction-container flex justify-center items-center flex-wrap lg:flex-nowrap gap-8 pr-8 pb-8 h-[37rem]'>
                    {/* <div className="gender-chart bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-xl w-full max-w-[20rem] relative">
                        <h2 className='text-center mt-6 mb-8 text-2xl font-bold'>Gender Ratio</h2>
                        <DoughnutChart labels={['Female', 'Male']} data={[10, 15]}  backgroundColor={["hsl(340, 82%, 56%)", "rgba(12, 348, 276, 0.8)"]} />
                        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[2rem]'><BiMaleFemale /></p>
                    </div> */}
                    <Table data = {allOrders} />
                </section>
            </main>
        </div>
    );
};

const WidgetItem = ({ heading, value, percent, color, amount }) => (
    <article className='widget w-[16rem] p-[2rem] rounded-[10px] flex justify-between items-stretch shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'>
        <div className='widget-info '>
            <p className='opacity-[0.7] text-[0.8rem] '>{heading}</p>
            <h4 className='text-[1.5rem] '>{amount ? `Total: ${value}+` : value}</h4>
            {
                percent > 0 ? (
                    <span className='green flex items-center gap-[0.2rem]'>
                        <HiTrendingUp /> +{`${percent > 10000 ? 9999 : percent}%`}
                    </span>
                ) : (
                    <span className='red flex items-center gap-[0.2rem]'>
                        <HiTrendingDown /> +{`${percent > -10000 ? -9999 : percent}%`}
                    </span>
                )}
        </div>

        <div className='widget-circle relative h-[5rem] w-[5rem] rounded-[50%] grid place-items-center before:content-[""] before:absolute before:h-[4rem] before:w-[4rem] before:bg-white before:rounded-[100%]' style={{
            background: `conic-gradient(
            ${color} ${(Math.abs(percent) / 100) * 360}deg,
            rgb(255, 255, 255) 0
          )`,
        }}>
            <span className='relative' style={{
                color,
            }}>
                {percent > 0 && `${percent > 10000 ? 9999 : percent}%`}
                {percent < 0 && `${percent > -10000 ? -9999 : percent}%`}
            </span>
        </div>
    </article>
)

const CategoryItem = ({ color, value, heading }) => (
    <div className="category-item w-full flex justify-between items-center gap-[1rem] p-[1rem] ">
        <h5 className='tracking-wide font-bold'>{heading}</h5>
        <div className='ml-auto w-[6rem] rounded-[20px] h-[0.5rem] flex-none'>
            <div
                className='rounded-[20px] h-full'
                style={{
                    backgroundColor: color,
                    width: `${value}%`,
                }}
            ></div>
        </div>
        <span className='text-[0.8rem] font-[700]'>{value}%</span>
    </div>
);

export default Dashboard