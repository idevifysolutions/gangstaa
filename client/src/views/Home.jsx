import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
import Banner from "../components/Banner/Bannercards";
import Trenndign_NewDrop from '../components/Trennding_NewDrop';
import { homeProductData } from "../data/homeProductData";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/productCart/productCart";

const Home = () => {
  const dispatch = useDispatch();

  const addToCartHandle = (productId) => {
    dispatch(addToCart(productId));
  };
  return (
    <div>
      <Banner />
      <Trenndign_NewDrop/>
      <TrendingNow />
  
      <Slider />
      <div className="flex items-center justify-center gap-5 mx-2 my-8">
        {homeProductData.map((item) => {
          return (
            <div key={item.id} className="">
              <HomeProductCard
                productId={item.id}
                productName={item.name}
                productImage={item.image}
                productPrice={item.price}
                handler={addToCartHandle}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
