import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";


const AllproductPage = () => {

  const [data, setData] =  useState([]); 
  const [sortBy,setSortBy] = useState("")

  const [showsidebar, setShowsidebar] = useState(false);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };


  const handleOnChangeSortBy = (e)=>{
    const { value } = e.target

    setSortBy(value);

    console.log("value", value);

    if(value === 'asc'){
      setData(preve => preve.sort((a,b)=>a.price - b.price))
    }

    if(value === 'dsc'){
      setData(preve => preve.sort((a,b)=>b.price - a.price))
    }

    if(value === 'new'){
      setData(preve => preve.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)));
    }
  }

  useEffect(()=>{

  },[sortBy, data])

 

  


  return (

    <> 
    <div className='relative flex h-full'>

 <Sidebar  sidebar={{showsidebar, handleSideBar, data, setData}}  /> 
       
<div className='h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4'>
 <div className="headerbar h-20 w-full border flex items-center justify-between shadow-md shadow-slate-400 px-4">

          {/* Sidebar toggle for mobile */}
          <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
          <RxHamburgerMenu className='text-2xl' />
        </div>

          <div className="text-xl font-semibold"> All Products</div>

           <div className="">
              <select className=" border p-2 " onChange={handleOnChangeSortBy}>
                <option>Select Sort</option>
                <option value="asc">Price (Low to High)</option>
                <option value="dsc">Price (High to Low)</option>
                <option value="new">Newest First</option>
              </select>
            </div>

            </div>

            <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 over">
        {data.map((product) => (
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
            

  </div>

  </div>
    
</>

  );
};

export default AllproductPage;


