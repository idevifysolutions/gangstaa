import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserData } from "../context/UserContext";
import { FaKey } from "react-icons/fa";

const images = [
  "https://images.bewakoof.com/original/men-s-blue-den-printed-oversized-shirt-604442-1698919129-2.jpg",
  "https://thehouseofrare.com/cdn/shop/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_765x.jpg?v=1710235193",
  "https://images.bewakoof.com/t1080/men-s-blue-black-run-checked-oversized-shirt-604430-1721135248-1.jpg",
  "https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg",
];

const VerifyingOTP = () => {
  const [otp, setOtp] = useState("");
  const { verifyUser } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyUser(Number(otp), navigate);
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex w-[400%] h-full"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})`, filter: "blur(3px)" }}
            />
          ))}
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 p-6 bg-gray-100 shadow-md rounded-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-black mb-4">
          Verify Account
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="otp">
              Enter OTP
            </label>
            <div className="flex items-center border border-gray-400 rounded-md">
              <FaKey className="ml-2 text-gray-600" />
              <input
                type="number"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
                placeholder="Enter OTP"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-black rounded-md hover:bg-gray-800"
          >
            Verify
          </button>
        </form>
        <div className="flex items-center justify-center pt-4 border-t-2 border-black mt-4">
          <Link
            to="/login"
            className="text-gray-800 font-bold hover:text-blue-700 hover:underline"
          >
            Go to login page
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyingOTP;
