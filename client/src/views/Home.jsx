import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
import Banner from "../components/Banner/Bannercards";
import JacketsPage from "../components/product/JacketsPage";
// import JacketsPage from '../components/product/ShirtsPage';
// import ShirtsPage from './ShirtsPage';
// import TemplatePage from "../components/templete/TemplatePage";
import ShirtsPage from "../components/product/ShirtsPage";
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
      {/* <JacketsPage /> */}
      {/* <TemplatePage /> */}
      {/* <ShirtsPage /> */}
    </div>
  );
};

export default Home;
