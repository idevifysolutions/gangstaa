import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgClose } from "react-icons/cg";

const Sidebar = (props) => {
  const { showsidebar, handleSideBar, data, setData } = props.sidebar;

  const [selectedOptions, setSelectedOptions] = useState({
    category: [],
    size: [],
    colors: [],
    priceRange: [],
  });

  const handleCheckboxChange = (type, value) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [type]: prevState[type].includes(value)
        ? prevState[type].filter((item) => item !== value)
        : [...prevState[type], value],
    }));
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/products/filterProducts`,
        {
          params: selectedOptions,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  };

  useEffect(() => {
    const updateProducts = async () => {
      const newFilteredProducts = await fetchProducts();
      setData(newFilteredProducts);
    };

    updateProducts();

    console.log("selected option", selectedOptions);
  }, [selectedOptions, setData]);

  async function fetchAllProducts() {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/product/admin/all`
      );

      setData(data.products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!selectedOptions) {
      fetchAllProducts();
    }
  }, []);

  return (
    <>
      <div
        className={`h-[100vh] w-auto bg-slate-50 ${
          showsidebar ? "block" : "hidden"
        } lg:block absolute lg:relative z-40`}
      >
        <div className="adminsidebarcontainer w-72 h-[100vh] overflow-y-scroll hide-scrollbar">
          <aside className="w-[100%] p-4 z-10 bg-white">
            <div
              className="w-fit block lg:hidden ml-auto text-2xl hover:text-red-600 cursor-pointer"
              onClick={handleSideBar}
            >
              <CgClose />
            </div>

            {/* Collections */}
            <div className="flex">
              <div className="item flex-1 mx-4 mt-3">
                <h1 className="font-thin uppercase opacity-80 my-2 tracking-wider text-slate-900 text-[16px]">
                  Collections
                </h1>

                <div>
                  {[
                    "Shirt",
                    "T-Shirt",
                    "Jacket",
                    "Denims",
                    "Jeans",
                    "Chinos",
                    "Track pants/Shorts/Lower",
                  ].map((category) => (
                    <div
                      key={category}
                      className="flex items-center gap-2 my-1"
                    >
                      <input
                        type="checkbox"
                        id={category}
                        checked={selectedOptions.category.includes(category)}
                        onChange={() =>
                          handleCheckboxChange("category", category)
                        }
                      />
                      <label htmlFor={category}>{category}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Size */}
            <div className="flex">
              <div className="item flex-1 mx-4 mt-3">
                <h1 className="font-thin uppercase opacity-80 my-2 tracking-wider text-slate-900 text-[16px]">
                  Size
                </h1>

                {/* Group for sizes like M to 4XL */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {["M", "L", "XL", "2XL", "3XL", "4XL"].map((size) => (
                    <button
                      key={size}
                      className={`px-2 py-1 text-sm border rounded-md ${
                        selectedOptions.size.includes(size)
                          ? "bg-slate-900 text-white"
                          : "bg-white text-slate-900"
                      }`}
                      onClick={() => handleCheckboxChange("size", size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Group for numeric sizes 28 to 44 */}
                <div className="flex flex-wrap gap-2">
                  {["28", "30", "32", "34", "36", "38", "40", "42", "44"].map(
                    (size) => (
                      <button
                        key={size}
                        className={`px-2 py-1 text-sm border rounded-md ${
                          selectedOptions.size.includes(size)
                            ? "bg-slate-900 text-white"
                            : "bg-white text-slate-900"
                        }`}
                        onClick={() => handleCheckboxChange("size", size)}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Colors */}
            <div className="flex">
              <div className="item flex-1 mx-4 mt-3">
                <h1 className="font-thin uppercase opacity-80 my-2 tracking-wider text-slate-900 text-[16px]">
                  Colors
                </h1>

                <div>
                  {["Red", "Blue", "Green", "Yellow"].map((color) => (
                    <div key={color} className="flex items-center gap-2 my-1">
                      <input
                        type="checkbox"
                        id={color}
                        checked={selectedOptions.colors.includes(color)}
                        onChange={() => handleCheckboxChange("colors", color)}
                      />
                      <label htmlFor={color}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="flex">
              <div className="item flex-1 mx-4 mt-3">
                <h1 className="font-thin uppercase opacity-80 my-2 tracking-wider text-slate-900 text-[16px]">
                  Price
                </h1>
                <div>
                  {["500-1000", "1000-2000", "2000-3000"].map((range) => (
                    <div key={range} className="flex items-center gap-2 my-1">
                      <input
                        type="checkbox"
                        id={range}
                        checked={selectedOptions.priceRange.includes(range)}
                        onChange={() =>
                          handleCheckboxChange("priceRange", range)
                        }
                      />
                      <label htmlFor={range}>{range}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
