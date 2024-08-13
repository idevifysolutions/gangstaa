import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoginPopup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white p-8 rounded-lg shadow-2xl max-w-sm text-center"
      >
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Login Required
        </h2>
        <p className="mb-8 text-gray-600">
          You must be logged in to access this page.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="px-8 py-2 bg-gray-800 text-white  shadow-lg hover:bg-gray-700 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="px-8 py-2 bg-black text-white  shadow-lg hover:bg-gray-900 transition-colors"
          >
            Log In
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoginPopup;
