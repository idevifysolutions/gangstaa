import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./images/hoodie1.jpeg";
import image2 from "./images/hoodie2.jpeg";
import image3 from "./images/hoodie3.jpeg";
import image4 from "./images/hoodie4.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";

const Product_Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const params = useParams();
  // console.log(params.id)
  return (
    <div className="relative h-full mt-7">
      <div className="flex flex-wrap items-center justify-around gap-5 sm:justify-center">
        <div className="flex justify-center items-center h-full w-[20rem] lg:w-[46rem] md:w-[100%] sm:w-[36rem]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="ml-8 mySwiper2"
          >
            <SwiperSlide>
              <img src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="hidden mySwiper sm:block md:block lg:block"
          >
            <SwiperSlide>
              <img src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image4} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex flex-col items-start ml-6 h-full w-[40rem]">
          <h2 className="text-3xl font-bold">Funky Hoodie</h2>
          <p className="text-2xl my-7">
            Men's Black House Of The Dragon Iconic Graphic Printed T-shirt
          </p>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{"Rs 500"} </p>
            <span className="font-serif">inclusive of all taxes</span>
            <strong className="mt-10 text-xl">100% cotton</strong>
          </div>

          <h2 className="text-3xl font-bold mt-9">Select Size</h2>
          <ul className="flex flex-wrap mt-4 gap-7">
            <li className="inline-block text-2xl font-bold border-2 border-black border-solid rounded-md p-7 active:bg-gray-500">
              S
            </li>
            <li className="inline-block text-2xl font-bold border-2 border-black border-solid rounded-md p-7 active:bg-gray-500">
              M
            </li>
            <li className="inline-block text-2xl font-bold border-2 border-black border-solid rounded-md p-7 active:bg-gray-500">
              L
            </li>
            <li className="inline-block text-2xl font-bold border-2 border-black border-solid rounded-md p-7 active:bg-gray-500">
              XL
            </li>
            <li className="inline-block text-2xl font-bold border-2 border-black border-solid rounded-md p-7 active:bg-gray-500">
              XXL
            </li>
          </ul>
          <div className="flex gap-5 my-4">
            <button className="px-4 py-2 m-2 text-xl text-white duration-200 bg-black bg-gradient-to-r from-primary to-secondary hover:scale-105">
              Add To Cart
            </button>
            <button className="px-4 py-2 m-2 text-xl text-black duration-200 bg-white border-2 border-black bg-gradient-to-r from-primary to-secondary hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
