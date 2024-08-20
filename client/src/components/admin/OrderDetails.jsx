import React from 'react';
import { CgClose } from "react-icons/cg";

const OrderDetails = ({ onClose, orderInfo }) => {
  const order = orderInfo[0];

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-4 rounded-lg w-full max-w-3xl h-full max-h-[80%] overflow-hidden shadow-lg'>
        <div className='flex justify-between items-center pb-3 border-b'>
          <h2 className='font-bold text-xl'>Order Details</h2>
          <button className='text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
          </button>
        </div>

        <div className='main h-full flex flex-col md:flex-row items-center justify-center gap-4 p-4'>
          {/* Order Items Section */}
          <div className='h-full w-full md:w-1/2'>
            <div className='text-center text-xl font-semibold pb-2 border-b mb-4'>
              Order Items
            </div>
            <div className='overflow-y-auto max-h-[70vh]'>
              {order.items.map((item, index) => (
                <div key={index} className='flex items-center mb-2 p-2 border rounded-lg'>
                 <img src={`http://localhost:4000/${item.photo}`} className='w-[80px] h-[80px] object-cover'  />               
                  <div className='ml-4'>
                    <p className='font-semibold'>{item.name}</p>
                    <p className='text-sm text-gray-600'>{item.price} * {item.quantity}</p>
                    <p className='text-sm text-gray-600'>{ item.price * item.quantity }</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Info Section */}
          <div className='h-full w-full md:w-1/2'>
            <div className='text-center text-xl font-semibold pb-2 border-b mb-4'>
              Order Info
            </div>
            <ul className='space-y-3'>
              <li><strong>Name:</strong> {order.user.name}</li>
              <li><strong>Address:</strong> {order.shippingInfo.address}</li>
            </ul>
            <div className='mt-4'>
              <ul className='space-y-3'>
                <li><strong>Subtotal:</strong> {order.subTotal}</li>
                <li><strong>Shipping Charges:</strong> Free</li>
                <li><strong>GST:</strong> 200</li>
                <li><strong>Total:</strong> {order.subTotal - 200}</li>
              </ul>
            </div>
            <div className='mt-4'>
              <ul className='space-y-3'>
                <li><strong>Status:</strong> {order.status}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
