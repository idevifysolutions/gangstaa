import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import slide_image_1 from "./images/hoddie.jpg";
import slide_image_2 from "./images/hoddie.jpg";
import slide_image_3 from "./images/hoddie.jpg";
import slide_image_4 from "./images/hoddie.jpg";
import slide_image_5 from "./images/hoddie.jpg";
import slide_image_6 from "./images/hoddie.jpg";
import slide_image_7 from "./images/hoddie.jpg";
import slide_image_8 from "./images/hoddie.jpg";
import slide_image_9 from "./images/hoddie.jpg";
import slide_image_10 from "./images/hoddie.jpg";


const Slider = () => {
  let swiperInstance = null;

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  const images = [
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8,
    slide_image_9,
    slide_image_10,
    slide_image_1,
    slide_image_2,
    slide_image_3,
    slide_image_4,
    slide_image_5,
    slide_image_6,
    slide_image_7,
    slide_image_8,
    slide_image_9,
    slide_image_10,
  ];


  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  };
  return (
    <>
      <div className="px-4 py-8 mx-auto container0">
        <div className="flex flex-col px-4 mb-12 md:flex-row gap-7">
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={4}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperInstance = swiper;
          }}
          className="swiper_container h-[400px]"
          breakpoints={breakpoints}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative flex items-center justify-center w-full h-full m-auto rounded-lg group bg-gradient-to-b from-slate-400 to-zinc-500"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={image}
                  alt={`slide_image_${index + 1}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-full w-full flex-grow basis-[200] rounded-lg object-cover object-center mix-blend-overlay opacity-70"
                />
                <div
                  className="absolute left-0 z-30 flex flex-col items-center justify-center w-full pl-3 pr-3 overflow-hidden text-2xl text-center duration-500 ease-in-out opacity-0 text-slate-50 group-hover:opacity-100"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  
                  {/* <button className="w-auto p-2 text-lg font-semibold tracking-wider text-white bg-black border border-black rounded-full lg:px-4">
                    Find Out More
                  </button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default Slider