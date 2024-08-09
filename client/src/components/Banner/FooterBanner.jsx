import React from 'react';
import { GiHandTruck } from "react-icons/gi";
import { CiStopwatch } from "react-icons/ci";
import { LiaCcAmazonPay } from "react-icons/lia";

const FooterBanner
= () => {
  return (
    <div className="bg-[#f2f2f2] text-black py-4 border-[1px] border-t-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Feature 1 */}
          
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8 ">
             <GiHandTruck  className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16  h-auto text-black' />
             <div className='flex flex-col text-center'>
             <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>Shipping on the House</span>
             <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-900'>For orders over 749/-</span>    
             </div>
         

          </div>
          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8">
          <CiStopwatch className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16 h-auto text-black' />
          <div className='flex flex-col text-center'>
            <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>On-Time Delivery</span>
            <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-900'>That's our superpower!</span>
            </div>
          </div>


          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 gap-2 md:gap-8">
          <LiaCcAmazonPay className='w-12 2xl:w-20 xl:w-20 lg:w-20 md:w-16 h-auto text-black' />
          <div className='flex flex-col text-center '>
            <span className='uppercase text-semibold text-[12px] sm:text-[16px] md:text-lg lg:text-lg xl:text-lg 2xl:text-lg'>Secure Payment</span>
            <span className='text-[11px]  sm:text-[11px] md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-slate-900'>Like a vault, but cooler</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;

