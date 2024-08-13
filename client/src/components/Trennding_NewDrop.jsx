import React, { useState } from "react";
import { trendingProducts, newDropProducts } from "../data/TrendingNewDropData";

const Trending_Products = () => {
  const [newDrop, setNewDrop] = useState(true);
  const [trenDing, setTrending] = useState(false);

  const [isHovered, setIsHovered] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
  });

  const handleNewDropClick = () => {
    if (!newDrop) {
      setNewDrop(true);
      setTrending(false);
    }
  };

  const handleTrendingClick = () => {
    if (!trenDing) {
      setNewDrop(false);
      setTrending(true);
    }
  };

  const handleMouseEnter = (image1) => {
    setIsHovered((prev) => ({
      ...prev,
      [image1]: !prev[image1],
    }));
  };

  const handleMouseLeave = (image1) => {
    setIsHovered((prev) => ({
      ...prev,
      [image1]: !prev[image1],
    }));
  };

  const data = Object.values(isHovered);

  return (
    <>
      <div className="w-full sm:w-[100vw] sm:mx-auto">
        <div className="flex mx-auto my-5 lg:pl-0 w-fit h-fit mb-14">
          <div
            className={`newdrops ${
              newDrop ? "bg-black text-white" : "bg-white text-black"
            } border-2 border-black`}
            onClick={handleNewDropClick}
          >
            <button className="px-4 py-2 text-xl duration-200 bg-gradient-to-r from-primary to-secondary hover:scale-105">
              New Drops
            </button>
          </div>

          <div
            className={`mosttending ${
              trenDing ? "bg-black text-white" : "bg-white text-black"
            } border-2 border-black`}
            onClick={handleTrendingClick}
          >
            <button className="px-4 py-2 text-xl duration-200 bg-gradient-to-r from-primary to-secondary hover:scale-105">
              Most Trending
            </button>
          </div>
        </div>

        {newDrop && (
          <div className="w-[96%] h-[550px] lg:w-[90%] lg:h-fit lg:gap-4 xl:w-[95%] xl:h-[69vh] xl:gap-5 md:gap-2 md:w-[98%] mx-auto flex lg:flex md:flex gap-5 md:overflow-hidden overflow-x-scroll hide-scrollbar">
            {newDropProducts.map((product, index) => {
              return (
                <div
                  className="h-[400px] w-[500px] md:h-[400px] md:w-[50%] lg:w-[40%] lg:h-[500px] xl:w-[20%] xl:h-full bg-slate-100"
                  key={index}
                >
                  <div
                    className={`relative h-full w-[250px] md:h-[80%] md:w-full transition-all duration-300`}
                    onMouseEnter={() => handleMouseEnter(`image${product.id}`)}
                    onMouseLeave={() => handleMouseLeave(`image${product.id}`)}
                  >
                    <img
                      src={product.imageUrl1}
                      alt="Placeholder"
                      className={`absolute inset-0 object-cover w-full h-[100%] transition-opacity duration-300 ${
                        data[index] ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    <img
                      src={product.imageUrl2}
                      alt="Hover Image"
                      className={`absolute inset-0 w-full h-[100%] object-cover transition-opacity duration-300 ${
                        data[index] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="desc h-[20%] w-[100%] bg-white text-ellipsis px-1 py-1">
                    <div>
                      <p className="text-black text-xs py-1 tracking-[2px]">
                        Slick Dark Blue Distressed Slim Fit Jeans
                      </p>
                      <p className="text-black text-xs py-1 tracking-[2px]">
                        INR 999
                      </p>
                    </div>

                    <div className="flex gap-3 py-3">
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]">
                        30
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        32
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        34
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        36
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        38
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {trenDing && (
          <div className="w-[96%] h-[550px] lg:w-[90%] lg:h-fit lg:gap-4 xl:w-[95%] xl:h-[69vh] xl:gap-5 md:gap-2 md:w-[98%] mx-auto flex lg:flex md:flex gap-5 overflow-x-scroll hide-scrollbar">
            {trendingProducts.map((product, index) => {
              return (
                <div
                  className="h-[400px] w-[500px] md:h-[400px] md:w-[50%] lg:w-[40%] lg:h-[500px] xl:w-[20%] xl:h-full bg-slate-100"
                  key={index}
                >
                  <div
                    className={`relative h-full w-[250px] md:h-[80%] md:w-full transition-all duration-300`}
                    onMouseEnter={() => handleMouseEnter(`image${product.id}`)}
                    onMouseLeave={() => handleMouseLeave(`image${product.id}`)}
                  >
                    <img
                      src={product.imageUrl1}
                      alt="Placeholder"
                      className={`absolute inset-0 object-cover w-full h-[100%] transition-opacity duration-300 ${
                        data[index] ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    <img
                      src={product.imageUrl2}
                      alt="Hover Image"
                      className={`absolute inset-0 w-full h-[100%] object-cover transition-opacity duration-300 ${
                        data[index] ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="desc h-[20%] w-[100%] bg-white text-ellipsis px-1 py-1">
                    <div>
                      <p className="text-black text-xs py-1 tracking-[2px]">
                        Slick Dark Blue Distressed Slim Fit Jeans
                      </p>
                      <p className="text-black text-xs py-1 tracking-[2px]">
                        INR 999
                      </p>
                    </div>

                    <div className="flex gap-3 py-3">
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]">
                        30
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        32
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        34
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        36
                      </div>
                      <div className="h-[16px] w-[16px] border-[1px] border-slate-100 text-black text-xs text-center rounded-sm bg-slate-100 p-[0.5px]bg-slate-200">
                        38
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="flex gap-5 mx-auto my-10 w-fit h-fit mb-14">
          <div className="newdrops ">
            <button className="px-4 py-2 m-2 text-xl text-black duration-200 bg-white border-2 border-black bg-gradient-to-r from-primary to-secondary hover:scale-105">
              View all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending_Products;
