import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.bewakoof.com/original/men-s-blue-den-printed-oversized-shirt-604442-1698919129-2.jpg",
  "https://thehouseofrare.com/cdn/shop/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_765x.jpg?v=1710235193",
  "https://images.bewakoof.com/t1080/men-s-blue-black-run-checked-oversized-shirt-604430-1721135248-1.jpg",
  "https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg",
];

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/forgot",
        { newPassword }
      );
      console.log(response.data);
      navigate("/login");
      // Handle successful password update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-white overflow-hidden">
      {/* Background Image Carousel */}
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
          Reset Password
        </h2>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="newPassword">
            New Password
          </label>
          <div className="flex items-center border border-gray-400 rounded-md relative">
            <FaLock className="ml-2 text-gray-600" />
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
              placeholder="Enter your new password"
            />
            <div
              onClick={toggleNewPasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-600"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="flex items-center border border-gray-400 rounded-md relative">
            <FaLock className="ml-2 text-gray-600" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
              placeholder="Confirm your new password"
            />
            <div
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 cursor-pointer text-gray-600"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <button
          onClick={handleUpdatePassword}
          className="w-full py-2 mt-4 text-white bg-black rounded-md hover:bg-gray-800"
        >
          Update Password
        </button>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
