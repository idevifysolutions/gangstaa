import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  let swiperInstance = null;

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };

  const images = [
    "https://e0.pxfuel.com/wallpapers/422/676/desktop-wallpaper-mens-fashion-men-clothing-thumbnail.jpg",
    "https://images.bewakoof.com/utter/content/2726/content_Jeans_jackets.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2020/11/LT/ZU/OX/65535174/photo-1552252059-9d77e4059ad1-jpg.jpg",
    "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://5.imimg.com/data5/SS/YL/VB/SELLER-10042265/men-brick-red-dobby-textured-cotton-shirt-500x500.jpg",
    "https://5.imimg.com/data5/BX/HM/OF/SELLER-24348080/skyblue-mens-formal-shirt.jpg",
    "https://nutcaseshop.com/cdn/shop/products/NC-HOODIE-0034d.jpg?v=1711786536&width=1445",
    "https://i.pinimg.com/474x/2a/ba/87/2aba8782ce94096839144c1d8df7a7c2.jpg",
    "https://images.meesho.com/images/products/405359816/z4kif_512.jpg",
    "https://www.jiomart.com/images/product/500x630/rvtdvtuhds/coloured-collar-t-shirt-for-men-casual-regular-fit-t-shirt-pure-cotton-lightweight-comfortable-classic-t-shirt-classic-vertical-stripes-medium-green-product-images-rvtdvtuhds-0-202209090825.jpg",

    "https://e0.pxfuel.com/wallpapers/422/676/desktop-wallpaper-mens-fashion-men-clothing-thumbnail.jpg",
    "https://images.bewakoof.com/utter/content/2726/content_Jeans_jackets.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2020/11/LT/ZU/OX/65535174/photo-1552252059-9d77e4059ad1-jpg.jpg",
    "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://5.imimg.com/data5/SS/YL/VB/SELLER-10042265/men-brick-red-dobby-textured-cotton-shirt-500x500.jpg",
    "https://5.imimg.com/data5/BX/HM/OF/SELLER-24348080/skyblue-mens-formal-shirt.jpg",
    "https://nutcaseshop.com/cdn/shop/products/NC-HOODIE-0034d.jpg?v=1711786536&width=1445",
    "https://i.pinimg.com/474x/2a/ba/87/2aba8782ce94096839144c1d8df7a7c2.jpg",
    "https://images.meesho.com/images/products/405359816/z4kif_512.jpg",
    "https://www.jiomart.com/images/product/500x630/rvtdvtuhds/coloured-collar-t-shirt-for-men-casual-regular-fit-t-shirt-pure-cotton-lightweight-comfortable-classic-t-shirt-classic-vertical-stripes-medium-green-product-images-rvtdvtuhds-0-202209090825.jpg",

    // "https://example.com/image1.jpg",
    // "https://example.com/image2.jpg",
    // "https://example.com/image3.jpg",
    // "https://example.com/image4.jpg",
    // "https://example.com/image5.jpg",
    // "https://example.com/image6.jpg",
    // "https://example.com/image7.jpg",
    // "https://example.com/image8.jpg",
    // "https://example.com/image9.jpg",
    // "https://example.com/image10.jpg",
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
        <div className="flex flex-col px-4 mb-12 md:flex-row gap-7"></div>
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
  );
};

export default Slider;
