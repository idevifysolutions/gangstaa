import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { LiaAngleDownSolid } from "react-icons/lia";
import FooterBanner from "../components/Banner/FooterBanner";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState({
    company: false,
    support: false,
    legal: false,
    resources: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <FooterBanner />
      <footer className="bg-black text-white py-6 w-full ">


        <div className="w-[90%] mx-auto flex flex-col  md:flex-row ">
            
            {/* Logo and company Information */}
          <div className=" w-full md:w-[25%] md:h-full">
                
            <div className="flex items-center justify-center md:justify-start md:items-start md:flex-col md:pt-1 md:px-2 py-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
              alt="Company Logo"
              className=" h-20 w-20  transform transition-transform duration-300 hover:scale-110"
            />

            <div className=" hidden md:block pt-3 pr-9">
            Unleash your inner swagger with Gangstaa—where street style meets high fashion. Elevate your game and own the look.
            </div>

            </div>

          </div>
         

          {/* Links Section */}
            <div className=" hidden w-[50%] h-full md:flex text-center">

                <div className="mb-6 md:mb-0 md:w-[50vw] ">
                  <h3 className="text-lg font-bold mb-2">Company</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 md:mb-0 md:w-[50vw]">
                  <h3 className="text-lg font-bold mb-2">Company</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 md:mb-0 md:w-[50vw]">
                  <h3 className="text-lg font-bold mb-2">Company</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mb-6 md:mb-0 md:w-[50vw]">
                  <h3 className="text-lg font-bold mb-2">Company</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="hover:text-gray-400">
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>

          </div>

         

          {/* Address and Social Icons Section */}
          <div className=" w-full md:w-[25%] md:h-full px-3">
            {/* Address */}
            <div className="text-center md:text-left md:px-1">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              <p className="text-sm md:text-base">
                1st 2nd 3rd 4th Floors, 509, PID No 81-1-509,
              </p>
              <p className="text-sm md:text-base">
                Bengaluru, Karnataka, India - 560038.
              </p>
              <p className="text-sm md:text-base">Phone: +91 8095733338</p>
              <p className="text-sm md:text-base">Email: care@wrogn.com</p>
            </div>

            {/* Social Icons */}
            <div className=" flex items-center justify-center py-5 gap-4 md:justify-start md:flex md:gap-5 md:py-5">
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebookF className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedinIn className="h-7 w-7 transform transition-transform duration-300 hover:scale-125" />
              </Link>
            </div>

          </div>

          </div>





          {/* Mobile view dropdowns */}
          <div className="md:hidden mt-6 space-y-4 mb-3">
            {["company", "support", "legal", "resources"].map((section) => (
              <div key={section} className="">
                <div className="w-[95%] text-center px-4 mx-auto flex justify-between">
                  <h1 className="uppercase text-sm">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h1>
                  <button onClick={() => toggleDropdown(section)}>
                    <LiaAngleDownSolid className="h-auto w-4" />
                  </button>
                </div>
                {isOpen[section] && (
                  <ul className=" pl-6 sm:pl-8 space-y-1 text-base">
                    <li>
                      <Link to="#" className="">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        News
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="">
                        Events
                      </Link>
                    </li>
                  </ul>
                )}
                <div className="border-dashed border-b-[1px] border-white w-[95%] mx-auto"></div>
              </div>
            ))}
          </div>



       

        <div className=" flex items-center justify-center border-t-[1px] border-slate-400">
          <p className="text-sm my-4">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>

      </footer>
    </>
  );
};

export default Footer;
