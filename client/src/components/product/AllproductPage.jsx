import React, { useEffect } from "react";
import { ProductData } from '../../context/ProductContext';

import TemplatePage from './../templete/TemplatePage';

const AllproductPage = () => {
  const { adminProducts, fetchAdminProducts } = ProductData();

  useEffect(() => {
    fetchAdminProducts();
  }, []);

  return (
    <TemplatePage>
      <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
        {adminProducts.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-lg transition-transform transform hover:scale-95 w-full 442px:w-[30%]"
          >
            <img
              src={`http://localhost:4000/${product.image}`}
              alt={product.title}
              className="object-cover w-full h-48 mb-4 rounded-md"
            />
            <h3 className="mb-2 text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </TemplatePage>
  );
};

export default AllproductPage;
