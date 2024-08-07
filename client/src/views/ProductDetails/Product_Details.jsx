import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../components/Slider/images/hoddie.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useParams } from 'react-router-dom';

const Product_Details = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const params = useParams()
    // console.log(params.id)
    return (
        <div className='relative h-full mt-7'>
            <div className='flex flex-wrap gap-5 items-center justify-around sm:justify-center'>
                <div className='flex justify-center items-center h-full w-[16rem] lg:w-[36rem] md:w-[100%] sm:w-[36rem]'>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 ml-8"
                    >
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
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
                        className="mySwiper hidden sm:block md:block lg:block"
                    >
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='flex flex-col items-start ml-6 h-full w-[50rem]'>
                    <h2 className='text-3xl font-bold'>Funky Hoodie</h2>
                    <p className='text-2xl my-7'>Men's Black House Of The Dragon Iconic Graphic Printed T-shirt</p>
                    <div className='flex flex-col'>
                        <p className='text-2xl font-bold'>{"Rs500"} </p>
                        <span className='font-serif'>inclusive of all taxes</span>
                        <strong className='mt-10 text-xl'>100% cotton</strong>
                    </div>

                    <h2 className='text-3xl font-bold mt-9'>Select Size</h2>
                    <ul className='flex flex-wrap gap-7'>
                        <li className='border-2 border-solid border-black inline-block text-2xl font-bold p-7 rounded-md active:bg-gray-500'>S</li>
                        <li className='border-2 border-solid border-black inline-block text-2xl font-bold p-7 rounded-md active:bg-gray-500'>S</li>
                        <li className='border-2 border-solid border-black inline-block text-2xl font-bold p-7 rounded-md active:bg-gray-500'>S</li>
                        <li className='border-2 border-solid border-black inline-block text-2xl font-bold p-7 rounded-md active:bg-gray-500'>S</li>
                        <li className='border-2 border-solid border-black inline-block text-2xl font-bold p-7 rounded-md active:bg-gray-500'>S</li>

                    </ul>
                    <button className='text-2xl border-2 border-solid border-gray-700 
                    rounded-lg mt-10 p-5 bg-gray-200 font-bold hover:bg-gray-100 
                    mb-7'>Add To Cart</button>
                </div>

            </div>
        </div>
    )
}

export default Product_Details