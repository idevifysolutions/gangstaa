import React from 'react'
import { Link } from 'react-router-dom'
import { FaTrash } from "react-icons/fa"
import { server } from '../store/store'

const CartItemCard = ({ cartItem, incrementHandler, decrementHandler, removeHandler }) => {
    const { name, photo, price, productId, quantity, stock } = cartItem
    return (
        <div className='cart-item p-4 flex items-center justify-start gap-12'>
            <div className='flex flex-col gap-4 md:flex-row rounded-md'>

           <Link to={`/product/${productId}`}>
           <img className='h-[10rem] w-[10rem] object-cover rounded-md' src={`${server}/${photo}`} alt={name} />
           </Link>
            <article className='flex flex-col justify-center items-start gap-1'>
                <Link className='text-[1.2rem] hover:text-red-400 font-bold' 
                to={`/product/${productId}`}>{name}</Link>
                <span className='text-xl'>₹ {price}</span>
            </article>
            </div>

            <div className='ml-auto flex items-center justify-center '>
                <button className='border-none h-8 w-8 text-3l rounded-[5px] flex items-center justify-center cursor-pointer text-[1.2rem] hover: text-red-500' onClick={() => decrementHandler(cartItem)}>-</button>
                <p>{quantity}</p>
                <button className='border-none h-8 w-8 rounded-[5px] flex items-center justify-center cursor-pointer text-[1.2rem] hover: text-red-500' onClick={() => incrementHandler(cartItem)}>+</button>
            </div>
            <button className='border-none bg-transparent flex items-center justify-center cursor-pointer text-[1.2rem] hover: text-red-400' onClick={() => removeHandler(productId)}>
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItemCard