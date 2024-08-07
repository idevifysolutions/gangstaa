import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
import Banner from "../components/Banner/Bannercards";

const Home = () => {
  return (
    <div>
      <Banner />
      <TrendingNow />
      <Slider />
      <HomeProductCard />
    </div>
  );
};

export default Home;
