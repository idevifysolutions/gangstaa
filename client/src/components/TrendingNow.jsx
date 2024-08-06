import React from "react";
import { trendingProducts } from "../data/trendingProducts";
import { Link } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-center mb-8">
        <h2 className="text-xl md:text-3xl lg:text-2xl font-bold text-center">
          Trending Now
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg transition transform hover:scale-105"
          >
           <Link to={`/product/${product.id}`}> <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            /></Link>
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
