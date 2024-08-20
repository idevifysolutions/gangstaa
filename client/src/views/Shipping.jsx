import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingInfo } from '../features/productCart/productCart'
import {toast} from "react-hot-toast"

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    phone: ""
  })
  const {cartItems, total} = useSelector((state) => state.cartReducer)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e)=> {
    setShippingInfo((prev) => ({...prev, [e.target.name]:e.target.value}))
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(saveShippingInfo(shippingInfo));
    navigate('/checkout');
  }

  useEffect(()=>{
    if(cartItems.length <= 0 || total === 0) return navigate("/cart")
  }, [cartItems, total])

  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={submitHandler} className='max-w-[450px] w-full flex flex-col justify-center 
      items-stretch gap-8 p-8'>
        <h1 className='text-2xl font-bold text-center m-8'>Shipping Address</h1>
        <input required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' type="text" placeholder='Enter address' name='address' value={shippingInfo.address} onChange={changeHandler} />
        <input required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' type="text" placeholder='Enter city' name='city' value={shippingInfo.city} onChange={changeHandler} />
        <input required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' type="text" placeholder='Enter state' name='state' value={shippingInfo.state} onChange={changeHandler} />
        <select required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' name='country' value={shippingInfo.country} onChange={changeHandler}>
          <option value="">Select Country</option>
          <option value="India">India</option>
        </select>
        <input required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' type="text" placeholder='Enter pin-code' name='pinCode' value={shippingInfo.pinCode} onChange={changeHandler} />
        <input required className='border-2 border-black p-4 outline-none text-[1.05rem] rounded-[5px]' type="number" placeholder='Enter phone number' name='phone' value={shippingInfo.phone} onChange={changeHandler} />
        <button type='submit' className='text-white bg-black p-4 
        hover:bg-black-100]'>Pay Now</button>
      </form>
    </div>
  )
}

export default Shipping