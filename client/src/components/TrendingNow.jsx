import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa"

const TrendingNow = ({ productId, name, price, stock, photo, handler }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-md my-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-5">

        <div className="w-[20rem] h-[20rem] flex items-start justify-center ">
          <img className="object-cover w-[95%] h-[95%] rounded-md" src={photo} alt="" />
        </div>

        <p className="text-2xl font-bold">{name}</p>
        <span className="text-xl">{price}</span>
        <div className="w-[10rem] mt-4">
          <button className="border-2 border-black p-4 flex items-center justify-center w-full gap-3" onClick={() => handler({ productId, price, name, photo, stock, quantity: 1 })}>
            <span className="font-bold">Add To Cart</span>
            <FaPlus/>
          </button>
        </div>
      </div>
    </>
  );
};



export default TrendingNow;
