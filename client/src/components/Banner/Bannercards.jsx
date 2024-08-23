import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const CarouselCard = () => {
  const slides = [
    {
      url: "https://marketplace.canva.com/EAFKwirl3N8/1/0/1600w/canva-brown-minimalist-fashion-product-banner-iRHpbHTqh-A.jpg",
    },
    {
      url: "https://marketplace.canva.com/EAFJyDO5UQs/1/0/1600w/canva-beige-minimal-aesthetic-new-fashion-collection-banner-FXXYhSTS-mc.jpg",
    },
    {
      url: "https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-full  h-[200px] sm:h-[300px] md:h-[400px] lg:h-[630px] mx-auto relative group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover"
      >
        {slides[currentIndex].text && (
          <div className="absolute font-bold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <p className="text-xl sm:text-2xl lg:text-4xl lg:text-justify">
              {slides[currentIndex].text}
            </p>
          </div>
        )}
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 sm:left-5 text-lg sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 sm:right-5 text-lg sm:text-2xl rounded-full p-1 sm:p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-2 sm:bottom-4 left-1/2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={`text-lg sm:text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-gray-900" : "text-gray-400"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselCard;
