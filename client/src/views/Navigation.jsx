import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTimes,
  FaBorderAll,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";
import axios from "axios";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/gangstaaLogo.png";
import { useSelector } from "react-redux";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState("user");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const getAllUser = async () => {
    const response = await axios.get("http://localhost:4000/api/user/me", {
      headers: {
        token,
      },
    });

    setIsAdmin(response.data.user.role);
  };

  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log(cartItems.length);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);
    getAllUser();
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
    <nav className="sticky top-0 z-50 h-24 text-black shadow-lg bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10 ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black rounded-md hover:bg-gray-200 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div whileHover="hover">
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
              <img src={logo} alt="" className="h-[105px]" />
            </Link>
          </div>

          {/* Items hidden on mobile and shown on desktop */}
          <div className="items-center hidden space-x-4 md:flex">
            <motion.div whileHover="hover">
              <Link to="/cart">
                <p className="relative flex items-center">
                  <FaShoppingCart className="w-6 h-6" />
                  {cartItems.length > 0 && (
                    <span className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full bottom-5">
                      {cartItems.length}
                    </span>
                  )}
                </p>
              </Link>
            </motion.div>
            {isAuth ? (
              <motion.button
                onClick={handleLogout}
                whileHover={{
                  scale: 1,
                  backgroundColor: "#313131", // Darkens the background color on hover
                  transition: {
                    duration: 0.2, // Smooth transition duration
                    ease: "easeInOut", // Easing function for a smooth animation
                  },
                }}
                className="py-1 px-3 text-lg font-semibold text-white  bg-black rounded-md cursor-pointer"
              >
                Logout
              </motion.button>
            ) : (
              <Link to="/login">
                <motion.div
                  whileHover="hover"
                  className="px-3 py-1 text-lg font-semibold text-white bg-black rounded-md cursor-pointer"
                >
                  Login
                </motion.div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div>
        {" "}
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="flex justify-between items-start flex-col fixed left-0 z-50 w-full lg:w-[17%] min-h-screen text-black bg-gray-50  inset-y-20 shadow-sm "
          >
            <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <FaHome className="w-5 h-5" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500">
                  Home
                </span>
              </Link>

              {isAuth && isAdmin === "admin" && (
                <Link
                  to="/admin/dashboard"
                  className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  <MdAdminPanelSettings className="w-5 h-5" />
                  <span className="pl-2 font-semibold text-[18px] text-gray-500">
                    Admin
                  </span>
                </Link>
              )}
              <Link
                to="catagery/userprofile"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <FaUserAlt className="w-5 h-5" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500">
                  Profile
                </span>
              </Link>

              <Link
                to="/catagery/myorder"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <FaBorderAll className="w-5 h-5" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500">
                  Order
                </span>
              </Link>

              <Link
                to="/cart"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <FaShoppingCart className="w-6 h-6" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500">
                  Cart
                </span>
              </Link>

              <Link
                to="/catagery"
                className="flex items-center px-4 py-2 space-x-2 text-sm font-medium rounded-md hover:bg-gray-200"
                onClick={() => setIsOpen(false)}
              >
                <BiSolidCategory className="w-6 h-6" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500">
                  Category
                </span>
              </Link>
            </div>

            {isAuth ? (
              <Link
                className="w-full flex items-center mb-28 px-4 py-2 space-x-2 text-sm font-medium bg-gray-200 rounded-md  hover:bg-gray-300 transition duration-300 ease-in-out transform  "
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
              >
                <IoMdLogOut className="w-6 h-6" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500 hover:font-bold ">
                  Logout
                </span>
              </Link>
            ) : (
              <Link
                className="w-full flex items-center mb-28 px-4 py-2 space-x-2 text-sm font-medium bg-gray-200 rounded-md  hover:bg-gray-300 transition duration-300 ease-in-out transform "
                to="/login"
                onClick={() => setIsOpen(false)}
              >
                <IoMdLogOut className="w-6 h-6" />
                <span className="pl-2 font-semibold text-[18px] text-gray-500 hover:font-bold">
                  Login
                </span>
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
