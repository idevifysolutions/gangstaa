import React from "react";

const HomeProductCard = ({
  productId,
  handler,
  productName,
  productImage,
  productPrice,
}) => {
  // console.log(productId);

  return (
    <div className="">
      <div className="">
        <img src={productImage} alt="" />
      </div>
      <h2 className="text-lg font-semibold">{productName}</h2>
      <p className="text-lg">{productPrice}</p>
      <button
        className="px-4 py-2 my-2 text-white bg-gray-800 rounded-full"
        onClick={() => {
          handler(productId);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default HomeProductCard;
