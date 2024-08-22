import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://www.iconicindia.com/cdn/shop/files/GMW24-2062025558_1_480x.jpg?v=1723803405",
  "https://www.iconicindia.com/cdn/shop/files/GMW24-0324019892_1_480x.jpg?v=1723803127",
  "https://www.iconicindia.com/cdn/shop/files/GMW24-1000260961_1_480x.jpg?v=1722590498",
];

const SaleBanner = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // always slide to the right
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.8 },
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 50, damping: 20 },
        opacity: { duration: 0.8 },
      },
    }),
  };

  return (
    <div className="relative w-full  bg-gray-100 py-16 px-4 h-full lg:px-24 flex items-center justify-center overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Side Image Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start  p-9">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              // exit="exit"
              className="w-full flex justify-center lg:justify-start"
            >
              <div className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-sm ">
                <img
                  src={images[currentIndex]}
                  alt="Sale Banner"
                  className=" lg:h-[480px] rounded-sm h-[350px]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Static Content */}
        <div className="text-center lg:text-left lg:w-1/2 mt-8 lg:mt-0 relative z-10 p-4">
          <h4 className="text-sm sm:text-base uppercase tracking-widest text-gray-500">
            Spring/Summer 2024 Collection
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Exclusive 30% Off on All Items
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mt-4">
            Refresh your wardrobe with our latest collection. Grab your favorite
            pieces at unbeatable prices.
          </p>
          <button
            onClick={() => navigate("/catagery/TShirtPage")}
            className="mt-6 bg-black text-white py-2 px-6 text-sm sm:text-base uppercase tracking-wider rounded-lg  transform transition-transform duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleBanner;
