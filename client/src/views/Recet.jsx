import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Array of images for background animation
const images = [
  "https://images.bewakoof.com/original/men-s-blue-den-printed-oversized-shirt-604442-1698919129-2.jpg",
  "https://thehouseofrare.com/cdn/shop/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_765x.jpg?v=1710235193",
  "https://images.bewakoof.com/t1080/men-s-blue-black-run-checked-oversized-shirt-604430-1721135248-1.jpg",
  "https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg",
];

const Recet = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Handle form submission for password update
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/user/reset?token=${params.token}`,
        { newPassword }
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Toggle visibility for new password field
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
  };

  // Toggle visibility for confirm password field
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(
      (prevShowConfirmPassword) => !prevShowConfirmPassword
    );
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-white">
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
              className="w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image})`, filter: "blur(3px)" }}
            />
          ))}
        </motion.div>
      </motion.div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* Reset Password Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full max-w-sm p-6 bg-gray-100 rounded-md shadow-md"
      >
        <h2 className="mb-4 text-2xl font-semibold text-center text-black">
          Reset Password
        </h2>
        {/* New Password Field */}
        <div className="mb-4">
          <label className="block mb-2 text-black" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative flex items-center border border-gray-400 rounded-md">
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
              className="absolute text-gray-600 cursor-pointer right-3"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label className="block mb-2 text-black" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative flex items-center border border-gray-400 rounded-md">
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
              className="absolute text-gray-600 cursor-pointer right-3"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        {/* Update Password Button */}
        <button
          onClick={handleUpdatePassword}
          className="w-full px-4 py-2 text-xl text-white transition duration-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none"
        >
          Update Password
        </button>
      </motion.div>
    </div>
  );
};

export default Recet;
