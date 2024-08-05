import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: {
      y: -5,
      transition: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  const textContainerVariants = {
    initial: {},
    hover: {},
  };

  const renderTextWithAnimation = (text) => {
    return (
      <motion.span
        className="inline-block"
        variants={textContainerVariants}
        initial="initial"
        whileHover="hover"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" p-2 rounded-md text-black hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div variants={iconVariants} whileHover="hover">
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBarsStaggered className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </div>
          <div className="flex-shrink-0 text-center">
            <Link to="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <motion.div variants={iconVariants} whileHover="hover">
              <FaUserAlt className="h-6 w-6" />
            </motion.div>
            <motion.div variants={iconVariants} whileHover="hover">
              <FaShoppingCart className="h-6 w-6" />
            </motion.div>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-16 left-0 bg-white text-black w-64 z-50 h-full shadow-2xl"
        >
          <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
            <Link
              to="/men/tshirts"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("T-Shirts")}
            </Link>
            <Link
              to="/men/shirts"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("Shirts")}
            </Link>
            <Link
              to="/men/jeans"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("Jeans")}
            </Link>
            <Link
              to="/men/jackets"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("Jackets")}
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
