import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderDetails from "../../components/admin/OrderDetails";

const Orders = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [manageOrder, setManageOrder] = useState(false);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const handlemanageOrder = () => {
    setManageOrder((prev) => !prev );
  }


  return (
    <>
      <div className="relative flex h-full">
         <AdminSidebar sidebar={{ showsidebar, handleSideBar }} /> 

         <div className='h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4'>
      <div className="headerbar h-20 w-full border flex items-center justify-between shadow-md shadow-slate-400 px-4">
        {/* Sidebar toggle for mobile */}
        <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
          <RxHamburgerMenu className='text-2xl' />
        </div>

        {/* Main header content */}
        <div className='h-full w-full flex items-center justify-between'>
          <div className='text-3xl font-bold flex-grow lg:text-xl text-center lg:text-left py-2'>
             Orders
          </div>
        </div>
      </div>



          <div className="flex flex-col">
           
          <div className=" hidden producttable w-full md:flex flex-col md:flex-row items-center justify-between border-[2px] border-slate-400 p-4 my-2 ">
      
      <div className="heading text-lg w-full md:w-80 h-auto my-2 flex items-center justify-center py-1 box-border flex-wrap">
      Name
      </div>
     

      <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center p-4 box-border">
        <p className='text-center'> Price </p>
      </div>

      <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center py-2 box-border">
        Discount
      </div>

      <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center p-4 box-border">
        <p className='text-center'>Qunatity</p>
      </div>

      <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center">
        Update Status
      </div>

      <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center " onClick={handlemanageOrder}>
        More Info
      </div>
    </div>




      
           
            <div className="producttable w-full flex flex-col md:flex-row items-center justify-between border-[2px] border-slate-400 border-t-0 p-4 my-2 rounded-md shadow-md">
      
            <div className="heading text-lg w-full md:w-80 h-auto my-2 flex items-center justify-center py-1 box-border flex-wrap">
            Prakash Ghorpade
            </div>
           

            <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center p-4 box-border">
              <p className='text-center'> 5000 </p>
            </div>
      
            <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center py-2 box-border">
                 500
            </div>
      
            <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center p-4 box-border">
              <p className='text-center'>3</p>
            </div>
      
              <select required  name='category' className='p-2 bg-slate-100 border rounded inputbox'>                
                      return(
                        <option>Processing</option>
                        <option>Shipping</option>
                        <option>Delivery</option>
                      )
                   
              </select>
      
            <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center bg-slate-300 cursor-pointer " onClick={handlemanageOrder}>
              Info
            </div>
          </div>

          </div>
        </div>
      </div>

      {
           manageOrder && <OrderDetails onClose={handlemanageOrder}/>
      }
    </>
  );
};

export default Orders;
