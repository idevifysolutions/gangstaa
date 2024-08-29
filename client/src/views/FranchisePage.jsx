import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import Slider from "react-slick";

const FranchisePage = () => {
  const [showMore, setShowMore] = useState(false);

  const franchiseModels = [
    "Model A",
    "Model B",
    "Model C",
    "Model D",
    "Model E",
    "Model F",
    "Model G",
  ];

  // Slick Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Company Info Section */}
      <section className="text-center py-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Join Our Clothing Brand
          </h1>
          <p className="text-lg text-gray-600">
            Be a part of our growing family by becoming a franchise owner.
          </p>
          <Link
            to="contact-form"
            smooth={true}
            duration={500}
            className="inline-block mt-6"
          >
            <FaArrowDown className="text-2xl text-black cursor-pointer animate-bounce" />
          </Link>
        </motion.div>
      </section>

      {/* Franchise Representation Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8"
          >
            Our Franchise
          </motion.h2>

          {/* Desktop View: Grid Display */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseModels.slice(0, showMore ? 7 : 5).map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-700">
                  {model}
                </h3>
                <p className="text-gray-600 mt-2">
                  Description of {model}. It includes various benefits and
                  requirements.
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile View: Carousel Display */}
          <div className="md:hidden">
            <Slider {...carouselSettings}>
              {franchiseModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex-none"
                >
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {model}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Description of {model}. It includes various benefits and
                    requirements.
                  </p>
                </motion.div>
              ))}
            </Slider>
          </div>

          {!showMore && (
            <div className="text-center mt-8 ">
              <button
                onClick={() => setShowMore(true)}
                className="hidden lg:block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-950 transition-all duration-300"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How Our Franchise Model Works */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8"
          >
            How Our Franchise Model Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-700 text-lg leading-relaxed text-center max-w-2xl mx-auto"
          >
            Our franchise model is designed to provide you with all the tools
            and support you need to run a successful business. From training to
            marketing support, we ensure that you're fully equipped to thrive in
            the competitive market.
          </motion.p>
        </div>
      </section>

      {/* How to Get Our Franchise */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8"
          >
            How to Get Our Franchise
          </motion.h2>
          <motion.ol
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="list-decimal list-inside text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
          >
            <li>Submit your application form.</li>
            <li>Meet with our franchise team.</li>
            <li>Review and sign the franchise agreement.</li>
            <li>Attend our comprehensive training program.</li>
            <li>Open your franchise store!</li>
          </motion.ol>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8"
          >
            Get in Touch
          </motion.h2>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-lg mx-auto bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-950 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
