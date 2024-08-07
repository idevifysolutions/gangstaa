import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";

const FooterBanner
= () => {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8 ">
           
             <FaTruckFast className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16  h-auto text-green-400' />
             <div className='flex flex-col text-center'>
             <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>Shipping on the House</span>
             <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-300'>For orders over 749/-</span>    
             </div>
         
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8">
          <MdOutlineTimer className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16 h-auto text-green-400' />
          <div className='flex flex-col text-center'>
            <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>On-Time Delivery</span>
            <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-300'>That's our superpower!</span>
            </div>
          </div>


          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8">
          <FaCcAmazonPay className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16 h-auto text-green-400' />
          <div className='flex flex-col text-center '>
            <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>Secure Payment</span>
            <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-300'>Like a vault, but cooler</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

