import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserData } from "../context/UserContext";
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/gangstaaLogo.png";
const images = [
  "https://images.bewakoof.com/original/men-s-blue-den-printed-oversized-shirt-604442-1698919129-2.jpg",
  "https://thehouseofrare.com/cdn/shop/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_765x.jpg?v=1710235193",
  "https://images.bewakoof.com/t1080/men-s-blue-black-run-checked-oversized-shirt-604430-1721135248-1.jpg",
  "https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg",
];

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { registerUser } = UserData();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-white">
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
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full max-w-sm p-6 bg-white rounded-md shadow-md"
      >
        <div className="flex-shrink-0 text-center flex justify-center ">
              <img src={logo} alt="" className="h-[105px]" />
          </div>
        <h2 className="mb-4 text-xl font-semibold text-center text-gray-600">
          Register
        </h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block mb-2 text-black" htmlFor="name">
              Name
            </label>
            <div className="flex items-center border border-gray-400 rounded-md">
              <FaUser className="ml-2 text-gray-600" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black" htmlFor="email">
              Email Address
            </label>
            <div className="flex items-center border border-gray-400 rounded-md">
              <FaEnvelope className="ml-2 text-gray-600" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-black" htmlFor="password">
              Password
            </label>
            <div className="relative flex items-center border border-gray-400 rounded-md">
              <FaLock className="ml-2 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-black bg-white border-none rounded-md focus:outline-none"
                placeholder="Enter your password"
                required
              />
              <div
                onClick={togglePasswordVisibility}
                className="absolute text-gray-600 cursor-pointer right-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-xl text-white duration-200 bg-black bg-gradient-to-r from-primary to-secondary "
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center pt-4 mt-4 border-t-2 border-black">
          <Link
            to="/login"
            className="font-bold text-gray-800 hover:text-blue-700 "
          >
            <span className="text-gray-500">Have an account? </span> <span className="font-bold">Login</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
