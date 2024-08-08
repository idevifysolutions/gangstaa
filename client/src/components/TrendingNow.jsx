import React from "react";
import { trendingProducts } from "../data/trendingProducts";
import { Link } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="flex justify-center mb-8">
        <h2 className="text-xl font-bold text-center md:text-3xl lg:text-2xl">
          Trending Now
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="p-2 h-[25rem] transition transform border rounded-lg shadow-lg hover:scale-105"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-[80%] mb-4 rounded-md"
              />
            </Link>
            <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
