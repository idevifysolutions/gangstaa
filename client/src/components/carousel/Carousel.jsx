import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Image1 from "./images/img1.png";
import Image2 from "./images/img2.png";
import Image3 from "./images/img3.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "20% off on all",
    title2: "Men's Wear",
    description:
      "His Life will forever be Changed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "20% off on all",
    title2: "Trending's Wear",
    description:
      "Who's there? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "80% off on all",
    title2: "Products Sale",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[700px] sm:min-h-[650px] flex justify-center items-center duration-200 bg-[#7a6256]">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>
      <div className="container pb-8 mr-8 lg:mr-0 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-center order-2 gap-4 pt-12 pl-8 text-center sm:pt-0 sm:text-left lg:pl-16 sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl font-bold sm:text-6xl lg:text-7xl text-[#f2dec2]"
                  >
                    {data.title}
                  </h1>
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl font-bold sm:text-6xl lg:text-7xl text-[#ffffff]"
                  >
                    {data.title2}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-[#ffffff]"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="flex items-center justify-center gap-4 sm:justify-start"
                  >
                    {/* <button
                      onClick={handleOrderPopup}
                      className="px-4 py-2 m-2 text-xl text-white duration-200 bg-black rounded-md bg-gradient-to-r from-primary to-secondary hover:scale-105"
                    >
                      Shop Now
                    </button> */}
                    <button
                      onClick={() => navigate("/catagery")}
                      className="px-4 py-2 m-2 text-xl text-white duration-200 bg-black rounded-md bg-gradient-to-r from-primary to-secondary hover:scale-105"
                    >
                      Shop Now
                    </button>
                    <button
                      onClick={() => navigate("/catagery")}
                      className="px-4 py-2 m-2 text-xl text-black duration-200 bg-white rounded-md bg-gradient-to-r from-primary to-secondary hover:scale-105"
                    >
                      All Products
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[250px] h-[300px] sm:h-[500px] pt-4 sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
