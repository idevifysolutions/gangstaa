import React from "react";
import HomeProductCard from "../components/HomeProductCard";
import TrendingNow from "../components/TrendingNow";
import Slider from "../components/Slider/Slider";
// import Carousel from "../components/carousel/Carousel";

const Home = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <TrendingNow />
      <Slider />
      <HomeProductCard />
    </div>
  );
};

export default Home;
