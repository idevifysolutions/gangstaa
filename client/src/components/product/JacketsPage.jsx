import React from "react";
import TemplatePage from "../templete/TemplatePage";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/productCart/productCart";
import { jacketsProducts } from "../../data/jacketsProducts";

const JacketsPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (id) => {
    console.log(id);
    dispatch(addToCart(id));
  };

  return (
    <TemplatePage>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {jacketsProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95 w-full 442px:w-[30%]"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <div className="flex justify-center gap-3 p-2">
              <button className="bg-black text-white font-medium text-lg rounded-sm w-full">
                Buy
              </button>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="text-black flex justify-end font-medium text-lg w-full"
              >
                <FaShoppingCart />
              </button>
            </div>
          </div>
        ))}
      </div>
    </TemplatePage>
  );
};

export default JacketsPage;
