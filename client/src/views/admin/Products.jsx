import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import UploadProduct from "../../components/admin/uploadProduct";
import { RxHamburgerMenu } from "react-icons/rx";
import UpdateProduct from "../../components/admin/updateProduct";
import { ProductData } from "../../context/ProductContext";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";

const Products = () => {
  const { adminProducts, fetchAdminProducts } = ProductData();

  const [uploadProduct, setUploadProduct] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(false);
  const [showsidebar, setShowsidebar] = useState(false);
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState(null);

  const handleUploadProduct = () => {
    setUploadProduct((prev) => !prev);
  };

  const fetchSingleProduct = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/product/${id}`
      );
      setProduct(response.data.product);
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  const handleUpdateProduct = async (id) => {
    await fetchSingleProduct(id);
    setUpdateProduct(true);
    setProductId(id);
  };

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/product/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      alert(response.data.message);
      fetchAdminProducts();
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  return (
    <>
      <div className="relative flex h-full">
        <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />

        <div className="h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4">
          <div className="headerbar h-10 w-full border flex items-center justify-between shadow-md shadow-gray-200 p-6">
            <div
              className="lg:hidden block cursor-pointer"
              onClick={handleSideBar}
            >
              <RxHamburgerMenu className="text-2xl" />
            </div>
            <div className="font-bold flex-grow text-xl text-center lg:text-left py-3">
              Products
            </div>
            <div
              className="flex items-center cursor-pointer py-1 bg-black text-white my-1 px-4 rounded-md"
              onClick={handleUploadProduct}
            >
              Add Product <FaPlusCircle className="ps-1 text-[20px]" />
            </div>
          </div>

          <main className="flex-grow">
            <div className="items-center justify-center w-full h-full overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                    <th className="px-6 py-3 text-center">Image</th>
                    <th className="px-6 py-3 text-center">Name</th>
                    <th className="px-6 py-3 text-center">Price</th>
                    <th className="px-6 py-3 text-center">Available Stock</th>
                    <th className="px-6 py-3 text-center">Update</th>
                    <th className="px-6 py-3 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-600">
                  {adminProducts.map((product, index) => (
                    <tr
                      key={product._id}
                      className="border-b border-gray-200 hover:bg-gray-100"
                    >
                      <td className="px-6 py-3 text-center">
                        <img
                          src={`http://localhost:4000/${product.image}`}
                          className="h-[50px] object-cover"
                          alt={product.title}
                        />
                      </td>
                      <td className="px-6 py-3 text-center">
                        {product.title}
                      </td>
                      <td className="px-6 py-3 text-center">₹ {product.price}</td>
                      <td className="px-6 py-3 text-center">{product.stock}</td>

                      <td
                        className="px-6 py-3 flex items-center justify-center  "
                      >
                        <div className="w-9 h-9 flex  cursor-pointer  items-center justify-center rounded-full hover:bg-gray-500 hover:text-white transition transform duration-300" onClick={() => handleUpdateProduct(product._id)}
                        >
                        <TfiPencil className="w-6 h-auto   mx-auto " />
                        </div>
                      </td>

                      <td
                        className="px-6 py-3 "
                        
                      >
                    <div className="w-9 ml-8 h-9 cursor-pointer flex items-center justify-center rounded-full hover:bg-red-500 hover:text-white transition transform duration-300" onClick={() => handleDeleteProduct(product._id)}>

                        <RiDeleteBinLine className="w-6 h-auto mx-auto" />

                    </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>

      {uploadProduct && <UploadProduct onClose={handleUploadProduct} />}
      {updateProduct && product && (<UpdateProduct onClose={() => setUpdateProduct(false)} productDetails={product}/>
      )}
    </>
  );
};

export default Products;
