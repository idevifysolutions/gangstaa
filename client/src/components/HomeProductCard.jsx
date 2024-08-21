import React from "react";
import { homeProductData } from "../data/homeProductData";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeProductCard = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleBrowseClick = (productId) => {
    // Navigate to the respective product page
    navigate(`/product/${productId}`);
  };

  // Settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container px-6 mx-auto">
        <h2 className="lg:text-3xl font-bold text-center mb-8 text-[1.4rem]">
          Shop by Category
        </h2>
        <Slider {...settings} className="lg:hidden">
          {" "}
          {/* Slider only visible on small screens */}
          {homeProductData.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white p-1 rounded-lg shadow-lg group h-[250px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-64 mb-4 rounded-lg"
                />
                {/* <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute top-0 left-0 object-cover w-full h-64 transition-opacity duration-700 rounded-lg opacity-0 hover:opacity-100"
                /> */}
                <Link
                  to={`/catagery/${product.categoryRoute}`}
                  className="absolute inset-0 flex items-center justify-center font-semibold text-white transition-opacity duration-700 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100"
                >
                  {product.category}
                </Link>
              </div>
              {/* <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p> */}
            </motion.div>
          ))}
        </Slider>

        <div className="hidden grid-cols-1 gap-8 lg:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {" "}
          {/* Grid only visible on large screens */}
          {homeProductData.map((product) => (
            <motion.div
              key={product.id}
              className="relative p-3 bg-white rounded-lg shadow-lg group "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-64 mb-4 rounded-lg"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute top-0 left-0 object-cover w-full h-64 transition-opacity duration-700 rounded-lg opacity-0 hover:opacity-100"
                />
                <Link
                  to={`/catagery/${product.categoryRoute}`}
                  className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white transition-opacity duration-700 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100"
                >
                  {product.category}
                </Link>
              </div>
              {/* <h3 className="mb-2 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductCard;
