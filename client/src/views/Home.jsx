import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
// import Banner from "../components/Banner/Bannercards";
import Carouesel from "../components/carousel/Carousel";
import Trenndign_NewDrop from "../components/Trennding_NewDrop";
import { homeProductData } from "../data/homeProductData";
import LoginPopUp from "../components/LoginPopup";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/productCart/productCart";
import { trendingProducts } from "../data/trendingProducts";
import toast from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  let isAuth = localStorage.getItem("isAuth");
  console.log("auth", localStorage.getItem("isAuth"));

  const addToCartHandle = ({
    productId,
    price,
    name,
    photo,
    stock,
    quantity,
  }) => {
    if (isAuth == null) {
      // console.log(isAuth);
      // return <LoginPopUp />;
      return toast.error("Longin required");
    } else {
      if (stock < 1) return toast.error("Out Of Stock");
      dispatch(addToCart({ productId, photo, name, price, quantity, stock }));
      toast.success("Added To Cart");
    }
  };
  return (
    <div>
      {/* <Banner /> */}
      <Carouesel />
      <Trenndign_NewDrop />

      <div>
        <h2 className="text-xl font-bold text-center md:text-3xl lg:text-2xl">
          Trending Now
        </h2>
        <div className="flex flex-wrap items-center justify-evenly ">
          {trendingProducts?.map((item) => (
            <TrendingNow
              key={item.id}
              productId={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              photo={item.imageUrl}
              handler={addToCartHandle}
            />
          ))}
        </div>
      </div>
      <Slider />
      <HomeProductCard />
    </div>
  );
};

export default Home;
