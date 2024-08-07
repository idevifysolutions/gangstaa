import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css"; // Import the CSS for the carousel

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const timeoutRef = useRef(null);

  const items = [
    {
      src: "https://images.bewakoof.com/t1080/men-s-blue-den-graphic-printed-oversized-shirt-604442-1721131088-1.jpg",
      title: "DESIGN SLIDER",
      topic: "Aerphone",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      detailTitle: "Aerphone GHTK",
      detailDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      specifications: {
        "Used Time": "6 hours",
        "Charging port": "Type-C",
        Compatible: "Android",
        Bluetooth: "5.3",
        Controlled: "Touch",
      },
    },
    {
      src: "https://thehouseofrare.com/cdn/shop/files/HERO_7c109915-b917-440a-a14a-5fe90a7571ef_765x.jpg?v=1710235193",
      title: "DESIGN SLIDER",
      topic: "Aerphone",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      detailTitle: "Aerphone GHTK",
      detailDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
      specifications: {
        "Used Time": "6 hours",
        "Charging port": "Type-C",
        Compatible: "Android",
        Bluetooth: "5.3",
        Controlled: "Touch",
      },
    },
    // Add other items here...
  ];

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = direction === "next" ? prevIndex + 1 : prevIndex - 1;
      if (newIndex < 1) newIndex = items.length;
      if (newIndex > items.length) newIndex = 1;
      return newIndex;
    });
    disableButtons();
  };

  const disableButtons = () => {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      nextButton.style.pointerEvents = "auto";
      prevButton.style.pointerEvents = "auto";
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => handleNavigation("next"), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`carousel ${showDetail ? "showDetail" : ""}`}>
      <div className="list">
        <AnimatePresence>
          {items.map(
            (item, index) =>
              index + 1 === currentIndex && (
                <motion.div
                  key={index}
                  className="item"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={item.src} alt={item.title} />
                  <div className="introduce">
                    <div className="title">{item.title}</div>
                    <div className="topic">{item.topic}</div>
                    <div className="des">{item.description}</div>
                    <button
                      className="seeMore"
                      onClick={() => setShowDetail(true)}
                    >
                      SEE MORE &#8599;
                    </button>
                  </div>
                  <div className={`detail ${showDetail ? "show" : ""}`}>
                    <div className="title">{item.detailTitle}</div>
                    <div className="des">{item.detailDescription}</div>
                    <div className="specifications">
                      {Object.entries(item.specifications).map(
                        ([key, value]) => (
                          <div key={key}>
                            <p>{key}</p>
                            <p>{value}</p>
                          </div>
                        )
                      )}
                    </div>
                    <div className="checkout">
                      <button>ADD TO CART</button>
                      <button>CHECKOUT</button>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="arrows">
        <button id="prev" onClick={() => handleNavigation("prev")}>
          {"<"}
        </button>
        <button id="next" onClick={() => handleNavigation("next")}>
          {">"}
        </button>
        <button id="back" onClick={() => setShowDetail(false)}>
          See All &#8599;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
