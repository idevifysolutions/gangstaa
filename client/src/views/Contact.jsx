import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="w-full lg:w-[80%] px-8 py-8 bg-white shadow-lg rounded-lg mt-8 flex flex-col md:flex-row md:space-x-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-center md:text-left text-gray-800 mb-6">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-indigo-200"
                rows="5"
                placeholder="Write your message here"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="px-8 py-3 text-white bg-black rounded hover:bg-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 bg-gray-800 text-white py-8 rounded-lg">
          <div className="px-4 grid grid-cols-1 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="mt-2">
                {" "}
                1st 2nd 3rd 4th Floors, 509, PID No 81-1-509, Bengaluru,
                Karnataka, India - 560038.
              </p>
              {/* Embedded Google Map */}
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.945045241202!2d-73.98955558459695!3d40.75367697932766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af1833bb5b%3A0xddd1330d96c518f6!2s123%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sin!4v1632149893089!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="mt-2">91 8095733338</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2">care@wrogn.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
