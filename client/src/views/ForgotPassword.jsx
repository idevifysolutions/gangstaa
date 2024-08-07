// src/components/ForgotPassword.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navitage = useNavigate();

  const handleUpdatePassword = async () => {
    // if (newPassword || confirmPassword === "") {
    //   alert("Fill in both fields");
    //   return;
    // }
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
      navitage.push("/login");
      // Handle successful password update
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 bg-gray-100 shadow-md rounded-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-black mb-4">
          Reset Password
        </h2>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="newPassword">
            New Password
          </label>
          <div className="flex items-center border border-gray-400 rounded-md">
            <FaLock className="ml-2 text-gray-600" />
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
              placeholder="Enter your new password"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-black mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="flex items-center border border-gray-400 rounded-md">
            <FaLock className="ml-2 text-gray-600" />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
              placeholder="Confirm your new password"
            />
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
