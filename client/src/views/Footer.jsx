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
      <footer className="bg-gray-800 text-white py-6 w-full ">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          {/* Links Section */}
          <div className="w-fit md:w-[50vw] flex flex-col md:flex-row md:space-x-8 ">
            <div className="hidden md:flex md:gap-12  md:w-[40vw] lg:w-3/4 xl:w-3/4">
              {["Company", "Support", "Legal", "Resources"].map((category) => (
                <div key={category} className="mb-6 md:mb-0 md:w-[50vw]">
                  <h3 className="text-lg font-bold mb-2">{category}</h3>
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
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mb-4 h-[120px] w-[120px] sm:h-[90px] sm:w-[90px] xs:h-[80px] xs:w-[80px] lg:h-[90px] lg:w-[90px] lg:mx-5 md:mx-5 mx-auto mt-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
              alt="Company Logo"
              className="w-full h-full transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Address and Social Icons Section */}
          <div className="w-full md:w-1/3 flex flex-col md:items-start md:text-right space-y-6">
            {/* Address */}
            <div className="text-center md:text-left">
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
            <div className="flex space-x-5 justify-center md:justify-end text-center md:text-right">
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

          {/* Mobile view dropdowns */}
          <div className="md:hidden mt-6 space-y-4">
            {["company", "support", "legal", "resources"].map((section) => (
              <div key={section}>
                <div className="w-full text-center py-2 px-4 flex justify-between">
                  <h1 className="uppercase">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h1>
                  <button onClick={() => toggleDropdown(section)}>
                    <LiaAngleDownSolid className="h-auto w-6" />
                  </button>
                </div>
                {isOpen[section] && (
                  <ul className="p-4 space-y-1 text-sm">
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
                <div className="border-dashed border-b-[1px] border-white w-full"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex items-center justify-center border-t-[1px] border-slate-400">
          <p className="text-sm my-8">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
