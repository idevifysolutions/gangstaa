import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { server } from "../../store/store";
import Loader from "../../components/Loader";
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
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/productCart/productCart";

const Product_Details = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectSize, setSelectSize] = useState("");
  const [selectColor, setSelectColor] = useState("");
  const [error, setError] = useState();
  const [details, setDetails] = useState({
    _id: "",
    category: "",
    colors: [],
    description: "",
    image: "",
    price: 0,
    size: [],
    sold: 0,
    stock: 0,
    title: "",
    quantity: 1,
  });
  //TODO: add the item to the cart
  const params = useParams();
  let isAuth = localStorage.getItem("isAuth");

  const dispatch = useDispatch();

  const getProductDetails = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/product/${params.id}`
      );
      // console.log("details", res)
      const {
        data: {
          product: {
            _id,
            category,
            colors,
            description,
            image,
            price,
            size,
            sold,
            stock,
            title,
          },
        },
      } = res;
      console.log(
        "data",
        _id,
        category,
        colors,
        description,
        image,
        price,
        size,
        sold,
        stock,
        title
      );
      setDetails({
        ...details,
        _id,
        category,
        colors,
        description,
        image,
        price,
        size,
        sold,
        stock,
        title,
      });
    } catch (err) {
      toast.error(err.message);
      toast.error("Invalid Product");
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProductDetails();
  }, [details._id]);

  const addToCartHandle = (
    productId,
    name,
    price,
    stock,
    photo,
    size,
    color,
    quantity
  ) => {
    if (isAuth === null) return toast.error("Login Required");
    if (stock < 1) return toast.error("Out Of Stock");
    if (
      !size ||
      !color ||
      size === "Select a size" ||
      color === "Select a color"
    )
      return toast.error("Please select size and color");
    dispatch(
      addToCart({ productId, name, price, stock, photo, size, color, quantity })
    );
    toast.success("Added To Cart");
  };

  const image = `${server}/${details.image}`;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="h-[80vh] w-full flex mt-5 justify-center text-5xl font-bold">
        Something went wrong...
      </div>
    );
  }

  console.log(selectSize, selectColor);
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
            className="hidden mySwiper sm:block md:block lg:block"
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
        <div className="flex flex-col items-start ml-6 h-full w-[40rem]">
          <h2 className="text-3xl font-bold">{details.title}</h2>
          <p className="text-2xl my-7">{details.description}</p>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">Rs {details.price} </p>
            {/* <p className="text-2xl font-bold">{details.stock} </p> */}
            <span className="font-serif">inclusive of all taxes</span>
            <strong className="mt-10 text-xl">100% cotton</strong>
          </div>

          <h2 className="text-3xl font-bold mt-9"> Sizes</h2>
          <select
            className="flex flex-wrap mt-4 gap-7"
            value={selectSize}
            onChange={(e) => setSelectSize(e.target.value)}
          >
            <option>Select a size</option>
            {details.size.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>

          <h2 className="text-3xl font-bold mt-9">Colors</h2>
          <select
            className="flex flex-wrap mt-4 gap-7"
            value={selectColor}
            onChange={(e) => setSelectColor(e.target.value)}
          >
            <option>Select a color</option>
            {details.colors.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="flex gap-5 my-4">
            <button
              className="px-4 py-2 m-2 text-xl text-white duration-200 
              bg-black rounded-md bg-gradient-to-r from-primary to-secondary hover:scale-105"
              onClick={() =>
                addToCartHandle(
                  details._id,
                  details.title,
                  details.price,
                  details.stock,
                  details.image,
                  selectSize,
                  selectColor,
                  details.quantity
                )
              }
            >
              Add To Cart
            </button>
            {/* <Link to="/checkout">
              <button className="px-4 py-2 m-2 text-xl text-black duration-200 bg-white border-2 border-black bg-gradient-to-r from-primary to-secondary hover:scale-105">
                Buy Now
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
