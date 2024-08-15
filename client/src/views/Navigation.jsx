import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes, FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "../assets/gangstaaLogo.png";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems.length);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/"); // Redirect to home or login page
  };

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
    <nav className="sticky top-0 z-50 h-20 text-black bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black rounded-md hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div variants={iconVariants} whileHover="hover">
                {isOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBarsStaggered className="w-6 h-6" />
                )}
              </motion.div>
            </button>
          </div>
          <div className="flex-shrink-0 text-center">
            <Link to="/" className="text-xl font-bold">
              <img src={logo} alt="" className="h-20" />
            </Link>
          </div>

          {/* Items hidden on mobile and shown on desktop */}
          <div className="items-center hidden space-x-4 md:flex">
            {isAuth ? (
              <motion.button
                onClick={handleLogout}
                variants={iconVariants}
                whileHover="hover"
                className="font-bold text-xl"
              >
                LogOut
              </motion.button>
            ) : (
              <Link to="/login">
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="font-bold text-xl"
                >
                  LogIn
                </motion.div>
              </Link>
            )}
            {/* <motion.div variants={iconVariants} whileHover="hover">
              <Link to="/cart">

                <p><FaShoppingCart className="relative w-6 h-6" />
                <span className="total-order absolute top-[0px] bg-red-500 p-[10px]">{cartItems.length}</span>
                </p>

              </Link>
            </motion.div> */}

            <motion.div variants={iconVariants} whileHover="hover">
              <Link to="/cart">
                <p className="relative flex items-center">
                  <FaShoppingCart className="w-6 h-6" />
                  <span className="absolute bottom-5 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </p>
              </Link>
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
          className="fixed left-0 z-50 w-64 h-full text-black bg-white shadow-2xl inset-y-16"
        >
          <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
            {/* User Profile button */}
            <Link
              to="/catagery/userprofile"
              className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaUserAlt className="w-5 h-5" />
            </Link>

            {/* Cart and User Icons in side menu */}
            {isAuth ? (
              <motion.button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                variants={iconVariants}
                className="block w-full px-3 py-2 text-lg font-medium text-left rounded-md hover:bg-gray-200"
              >
                LogOut
              </motion.button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-lg font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <motion.div variants={iconVariants} whileHover="hover">
                  LogIn
                </motion.div>
              </Link>
            )}
            <Link
              to="/cart"
              className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingCart className="w-6 h-6" />
            </Link>

            {/* Category links */}
            <Link
              to="/catagery/TShirtPage"
              className="block px-3 py-2 rounded-md hover:bg-gray-200 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("T-Shirts")}
            </Link>
            <Link
              to="/catagery/ShirtsPage"
              className="block px-3 py-2 rounded-md hover:bg-gray-200 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("Shirts")}
            </Link>
            <Link
              to="/catagery/JeansPage"
              className="block px-3 py-2 rounded-md hover:bg-gray-200 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {renderTextWithAnimation("Jeans")}
            </Link>
            <Link
              to="/catagery/jackets"
              className="block px-3 py-2 rounded-md hover:bg-gray-200 text-lg font-medium"
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
