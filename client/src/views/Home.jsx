import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
import Banner from "../components/Banner/Bannercards";
import JacketsPage from '../components/product/JacketsPage';
// import JacketsPage from '../components/product/ShirtsPage';
// import ShirtsPage from './ShirtsPage';
// import TemplatePage from "../components/templete/TemplatePage";
import ShirtsPage from "../components/product/ShirtsPage";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrendingNow />
      <Slider />
      <HomeProductCard />
      <JacketsPage />
      {/* <TemplatePage /> */}
      <ShirtsPage />
       
    </div>
  );
};

export default Home;
