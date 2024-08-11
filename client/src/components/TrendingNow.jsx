import React from "react";
import { trendingProducts } from "../data/trendingProducts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingNow = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex justify-center mb-8">
        <h2 className="text-xl font-bold text-center md:text-3xl lg:text-2xl">
          Trending Now
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trendingProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 h-[25rem] transition transform border rounded-lg shadow-lg"
          >
            <Link to={`/product/${product.id}`}>
              <motion.img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-[80%] mb-4 rounded-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Link>
            <motion.h3
              className="mb-2 text-xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {product.name}
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {product.price}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
