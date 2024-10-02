import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";
import Slider from "react-slick";

const FranchisePage = () => {
  const [showMore, setShowMore] = useState(false);

  // Real franchise model data with Indian names and embedded map links
  const franchiseModels = [
    {
      name: "Aman Sharma",
      description:
        "Aman Sharma is an experienced business owner running a successful franchise in the clothing industry.",
      address: "3rd Floor, South Tower, DLF Corporate Park, Gurgaon, Haryana",
      city: "Noida",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.950157708385!2d77.08492568747807!3d28.50468991804586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b14e1d29a3%3A0x991b6e2ed36d09a1!2sDLF%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1605697122378!5m2!1sen!2sin",
    },
    {
      name: "Riya singh",
      description:
        "Riya singh has a prominent role in the retail industry, managing franchises with a focus on fashion.",
      address:
        "Plot No. 10, Nelson Mandela Marg, Vasant Kunj, New Delhi, Delhi",
      city: "New Delhi",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4487.832165048249!2d77.15181955598752!3d28.540223520943728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18f28ffb7d0f%3A0xb5516be6b303a3b1!2sVasant%20Kunj!5e0!3m2!1sen!2sin!4v1605697556197!5m2!1sen!2sin",
    },
    {
      name: "Vikram Singh",
      description:
        "Vikram Singh is a successful entrepreneur with expertise in franchise management, particularly in the fashion industry.",
      address:
        "206, SK Towers, Second Floor, 3rd Avenue, Anna Nagar East, Chennai",
      city: "Chennai",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1122425150563!2d80.20763241480182!3d13.086473990786393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52660115e2f8d1%3A0x102b5f9b6c8e93cb!2sSK%20Towers!5e0!3m2!1sen!2sin!4v1605697670544!5m2!1sen!2sin",
    },
    {
      name: "Rohit Gupta",
      description:
        "Rohit Gupta leads a franchise in the retail industry, managing multiple outlets across Bangalore.",
      address:
        "Van Heusen Store, Brigade Road, Ashok Nagar, Bangalore, Karnataka",
      city: "Bangalore",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6223.772593175404!2d77.60119532500163!3d12.971622430694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d50ed6850d%3A0xc0515c710a9de0fd!2sBrigade%20Road!5e0!3m2!1sen!2sin!4v1605697803487!5m2!1sen!2sin",
    },
    {
      name: "Anita Verma",
      description:
        "Anita Verma is a passionate businesswoman who successfully manages a leading franchise in Mumbai.",
      address: "Raymond Store, Linking Road, Khar West, Mumbai, Maharashtra",
      city: "Mumbai",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7209615126925!2d72.8324612154771!3d19.066154247836446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b711b7b9db%3A0x8bf3f152eb4077f3!2sLinking%20Road!5e0!3m2!1sen!2sin!4v1605697875602!5m2!1sen!2sin",
    },
    {
      name: "Suresh Patel",
      description:
        "Suresh Patel manages a franchise in Kolkata, specializing in men's formal wear and high-end retail.",
      address:
        "Peter England Store, Gariahat Road, Ballygunge, Kolkata, West Bengal",
      city: "Kolkata",
      embeddedMapLink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.241455532397!2d88.36467841543493!3d22.522354434706175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02711ab35d1a1d%3A0xe5e1230ef518a702!2sGariahat%20Road!5e0!3m2!1sen!2sin!4v1605697973498!5m2!1sen!2sin",
    },
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
            Join Our Clothing Brand Franchise
          </h1>
          <p className="text-lg text-gray-600">
            Become a part of our growing franchise family across India.
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
            Our Franchise Partners
          </motion.h2>

          {/* Desktop View: Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {franchiseModels.slice(0, showMore ? 6 : 3).map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {model.name}
                </h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <p className="text-gray-500">
                  <strong>Address: </strong>
                  {model.address}, {model.city}
                </p>
                <div className="mt-4">
                  <iframe
                    src={model.embeddedMapLink}
                    width="100%"
                    height="200"
                    allowFullScreen=""
                    loading="lazy"
                    title={`Location of ${model.name}`}
                  ></iframe>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowMore(true)}
                className="bg-black text-white font-semibold py-2 px-4 rounded"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="contact-form" className="py-12 bg-gray-300">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 text-center mb-8"
          >
            Contact Us to Become a Franchise Partner
          </motion.h2>

          {/* Add contact form here */}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/9373700515"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-black text-white font-semibold py-4 px-4 rounded flex items-center justify-center space-x-2">
              <FaWhatsapp className="text-white text-2xl" />
              <span>Contact Us</span>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
