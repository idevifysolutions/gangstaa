import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { LiaAngleDownSolid } from "react-icons/lia";
import FooterBanner from '../components/Banner/FooterBanner';
import {Link} from 'react-router-dom';

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
    <FooterBanner/>
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between ">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-8 mb-6 md:mb-0 w-full">
           
            <div className="mb-4 md:mb-0 md:w-1/4 flex-shrink-0 text-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/016/471/452/original/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg"
                alt="Company Logo"
                className="w-28 h-auto transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Address */}
            <div className="md:w-3/4 w-96 text-center md:text-left">
              <h2 className="text-lg font-semibold mb-2">Address</h2>
              <p>
              1st 2nd 3rd 4th Floors, 509, PID No 81-1-509,</p>
              <p> Bengaluru, Karnataka, India - 560038.</p>
              <p> Phone : +91 8095733338</p>
              <p>  Email : care@wrogn.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6 md:mb-0 text-center mx-24  mt-6 ">

            <Link to="#" target="_blank" rel="" className="text-white hover:text-gray-400">
              <FaFacebookF className='h-7 w-7 text-white transform transition-transform duration-300 hover:scale-125' />
            </Link>
            <Link to="#" target="_blank" rel="" className="text-white hover:text-gray-400">
              <FaTwitter className='h-7 w-7 text-white transform transition-transform duration-300 hover:scale-125' />
            </Link>
            <Link to="#" target="_blank" rel="" className="text-white hover:text-gray-400">
              <FaInstagram className='h-7 w-7 text-white transform transition-transform duration-300 hover:scale-125' />
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="" className="text-white hover:text-gray-400">
              <FaLinkedinIn className='h-7 w-7 text-white transform transition-transform duration-300 hover:scale-125'/>
            </Link>

          </div>

          {/* Links Sections */}
          <div className="w-full md:w-auto">
            <div className="md:hidden mb-4">
              <div className="w-full text-center py-2 px-4  focus:outline-none flex justify-between">
                  <h1 className='uppercase'>Compnay</h1>
                  <button onClick={() => toggleDropdown('company')}> 
                  < LiaAngleDownSolid className='h-auto w-6'/> 
                </button>
              </div>
  

              {isOpen.company && (
                <ul className=" p-4 space-y-1">
                  <li><Link to="#" className="">About Us</Link></li>
                  <li><Link to="#" className="">Careers</Link></li>
                  <li><Link to="#" className="">Blog</Link></li>
                  <li><Link to="#" className="">News</Link></li>
                  <li><Link to="#" className="">Events</Link></li>
                </ul>
              )}
              <div className='border-dashed border-b-[1px] border-white w-full '></div>

            </div>

            <div className="md:hidden mb-4">
            <div className="w-full text-center py-2 px-4  focus:outline-none flex justify-between">
                  <h1 className='uppercase'>Support</h1>
                  <button onClick={() => toggleDropdown('support')}> 
                    < LiaAngleDownSolid className='h-auto w-6'/> 
                 </button>
              </div>
         
              {isOpen.support && (
                <ul className=" p-4 space-y-1">
                <li><Link to="#" className="">About Us</Link></li>
                <li><Link to="#" className="">Careers</Link></li>
                <li><Link to="#" className="">Blog</Link></li>
                <li><Link to="#" className="">News</Link></li>
                <li><Link to="#" className="">Events</Link></li>
              </ul>
              )}
                            <div className='border-dashed border-b-[1px] border-white w-full '></div>

            </div>

            <div className="md:hidden mb-4">
            <div className="w-full text-center py-2 px-4  focus:outline-none flex justify-between">
                  <h1 className='uppercase'>Legal</h1>
                  <button onClick={() => toggleDropdown('legal')}> 
                    < LiaAngleDownSolid className='h-auto w-6'/>
                  </button>
            </div>
              {isOpen.legal && (
                 <ul className=" p-4 space-y-1">
                 <li><Link to="#" className="">About Us</Link></li>
                 <li><Link to="#" className="">Careers</Link></li>
                 <li><Link to="#" className="">Blog</Link></li>
                 <li><Link to="#" className="">News</Link></li>
                 <li><Link to="#" className="">Events</Link></li>
               </ul>
              )}
              
              <div className='border-dashed border-b-[1px] border-white w-full '></div>

            </div>

            <div className="md:hidden mb-4">
            <div className="w-full text-center py-2 px-4  focus:outline-none flex justify-between">
                  <h1 className='uppercase'>Resources</h1>
                  <button onClick={() => toggleDropdown('resources')}> 
                    < LiaAngleDownSolid className='h-auto w-6'/>
                  </button>
            </div>
              {isOpen.resources && (
                 <ul className=" p-4 space-y-1">
                 <li><Link to="#" className="">About Us</Link></li>
                 <li><Link to="#" className="">Careers</Link></li>
                 <li><Link to="#" className="">Blog</Link></li>
                 <li><Link to="#" className="">News</Link></li>
                 <li><Link to="#" className="">Events</Link></li>
               </ul>
              )}
              <div className='border-dashed border-b-[1px] px-4 border-white w-full '></div>
            </div>


            {/* Desktop View */}
            <div className="hidden md:flex md:flex-row md:space-x-8">
              {/* First Column of Links */}
              <div className="mb-6 md:mb-0 md:w-[7vw] ">
                <h3 className="text-md font-semibold mb-2">Company</h3>
                <ul className="space-y-4">
                  <li><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
                  <li><Link to="/careers" className="hover:text-gray-400">Careers</Link></li>
                  <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
                  <li><Link to="/news" className="hover:text-gray-400">News</Link></li>
                  <li><Link to="/events" className="hover:text-gray-400">Events</Link></li>
                </ul>
              </div>

              {/* Second Column of Links */}
              <div className="mb-6 md:mb-0 md:w-1/4">
                <h3 className="text-md font-semibold mb-2">Support</h3>
                <ul className="space-y-4">
                  <li><Link to="#" className="hover:text-gray-400">About Us</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Careers</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Blog</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">News</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Events</Link></li>
                </ul>
              </div>

              {/* Third Column of Links */}
              <div className="mb-6 md:mb-0 md:w-1/4">
                <h3 className="text-md font-semibold mb-2">Legal</h3>
                <ul className="space-y-4">
                  <li><Link to="#" className="hover:text-gray-400">About Us</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Careers</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Blog</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">News</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Events</Link></li>
                </ul>
              </div>

              {/* Fourth Column of Links */}
              <div className="mb-6 md:mb-0 md:w-1/4">
                <h3 className="text-md font-semibold mb-2">Resources</h3>
                <ul className="space-y-4">
                  <li><Link to="#" className="hover:text-gray-400">About Us</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Careers</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Blog</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">News</Link></li>
                  <li><Link to="#" className="hover:text-gray-400">Events</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-12 flex items-center justify-center h-8 border-t-[1px] border-slate-400">
          <p className="text-sm mt-6">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
