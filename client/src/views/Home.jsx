import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <TrendingNow />
      <Slider />
      <HomeProductCard />
    </div>
  );
};

export default Home;
