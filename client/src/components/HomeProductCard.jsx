/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { homeProductData } from "../data/homeProductData";

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    transition: {
      duration: 0.5,
    },
  }),
};

const HomeProductCard = ({ product, direction }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      custom={direction}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="relative">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={product.hoverImage}
          alt={product.name}
          className="w-full h-64 object-cover absolute top-0 left-0 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Buy Now
          </button>
          <FaShoppingCart className="text-white text-2xl" />
        </motion.div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <p className="text-gray-600">{product.sizes}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </motion.div>
  );
};

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    if (index + 4 < homeProductData.length) {
      setDirection(1);
      setIndex(index + 2);
    }
  };

  const handlePrev = () => {
    if (index - 2 >= 0) {
      setDirection(-1);
      setIndex(index - 2);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 640) {
      const interval = setInterval(() => {
        if (!isPaused) {
          setDirection(1);
          setIndex((prevIndex) =>
            prevIndex + 1 >= homeProductData.length ? 0 : prevIndex + 1
          );
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="relative">
      <h1 className="text-xl md:text-3xl lg:text-2xl font-bold text-center mb-4">
        Shop By Category
      </h1>
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          className="text-3xl rounded-full hover:bg-gray-300 transition-colors duration-200"
          disabled={index === 0}
        >
          <FaAngleDoubleLeft />
        </button>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction}>
            {homeProductData
              .slice(index, index + (window.innerWidth <= 640 ? 1 : 4))
              .map((product, i) => (
                <HomeProductCard
                  key={product.id}
                  product={product}
                  index={i}
                  direction={direction}
                />
              ))}
          </AnimatePresence>
        </div>
        <button
          onClick={handleNext}
          className="text-3xl rounded-full hover:bg-gray-300 transition-colors duration-200"
          disabled={index + 4 >= homeProductData.length}
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
