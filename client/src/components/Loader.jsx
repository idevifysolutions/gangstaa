import React from "react";
import { motion } from "framer-motion";
import { FadeLoader } from "react-spinners";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center">
        <p className="text-white mt-4 text-2xl">
          <FadeLoader />
        </p>
      </div>
    </motion.div>
  );
};

export default Loader;
