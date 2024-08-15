import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";



const OrderDetails = ({onClose}) => {

  return (
    <div className='fixed w-full  h-full bg-slate-300 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
       <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden logincontainer'>

            <div className='flex justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Order Details</h2>
                <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer ' onClick={onClose}>
                    <CgClose/>
                </div>
            </div>

              <div className='main h-full flex items-center justify-center'>

                <div className='h-[90%] w-[50%]'>
                    <div className='w-full flex text-center text-xl font-semibold'>
                    <p className='w-full py-2 '>Order Items</p>
                    </div>

                    <div className='w-full h-full p-2 '>

                        <div className='w-full h-[90%] p-1  overflow-scroll hide-scrollbar'> 

                         <div className='w-full h-fit mb-2 border-2 rounded-md border-black flex'>

                            <div className="img text-center">
                            <img src="https://www.snitch.co.in/cdn/shop/files/4MSS1897-06-M53_1800x1800.jpg?v=1688718326" className='w-[80px] h-[80px] object-cover'  />
                            </div>

                            <div className="name flex flex-wrap items-center justify-center p-2">
                              <p>Peach Mandarin Linen Shirt</p>
                            </div>

                            <div className="qnatity flex flex-wrap items-center justify-center p-2">
                              <p>2000 * 4 = 8000</p>
                            </div>


                         </div>

                         </div>

                    </div>
                        
                </div>
                
                <div className='h-[90%] w-[50%]'>
 
                    <div className='w-full flex text-center text-xl font-semibold'>
                    <p className='w-full py-2 '>Order Info</p>
                    </div>

                    <div className='flex  flex-col gap-4 p-4'>
                        
                       <ul>
                       <div className='w-full flex text-lg font-semibold'>
                    <p className='w-full  py-1'>Order Info</p>
                         </div>
                        <li>Name: Prakash Ghorpade</li>
                        <li>Address: At post Lahavit tel dist Nashik (Maharashtra)</li>
                       </ul>

                        <ul>
                        <div className='w-full flex text-lg font-semibold'>
                    <p className='w-full py-1 '>Amount Info</p>
                         </div>
                         <li>Subtotal: 4000</li>
                         <li>Shipping Charges: Free</li>
                         <li>GST: 200</li>
                         <li>Discount: 400</li>
                         <li>Total: 3600</li>
                        </ul>

                        <ul>
                        <div className='w-full flex text-lg font-semibold'>
                    <p className='w-full py-1 '>Status Info</p>
                         </div>
                         <li>Status: Processing</li>
                        </ul>

                    </div>

        
                </div>


              </div>


       </div>

    </div>
  )
}

export default OrderDetails;