import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import UploadProduct from '../../components/admin/uploadProduct';
import { RxHamburgerMenu } from "react-icons/rx";
import UpdateProduct from '../../components/admin/updateProduct';
import {ProductData} from '../../context/ProductContext';
import axios from 'axios';

const Products = () => {
    
  const { adminProducts, fetchAdminProducts} = ProductData();
          
    const [uploadProduct, setUploadProduct] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);
    const [showsidebar, setShowsidebar] = useState(false);
    const [product, setProduct] = useState();
    const [productId, setProductId] = useState();


    const  handleUploadProduct =  () => {
        setUploadProduct((prev) => !prev);
    } 

    const  fetchSingleProduct = async (id) => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api//product/${id}`
        );
        const data = await response;
        setProduct( data.data.product);
       
      } catch (error) {
        console.log(error);
      }
    }

   

    const handleUpdateProduct = async (id) => {
       const data = await fetchSingleProduct(id);
      setUpdateProduct((prev) => !prev);
      setProductId(id);
      

    //   const handleUpdateProducts = async (id) => {
          
    //     try{
          
    //          const response = await axios.put(`http://localhost:4000/api/product/${id}`,
    //            {
    //              headers: {
    //                token: localStorage.getItem("token"),
    //              },
    //            },
    
    //           )
    //     }
    
    //     catch(error){
               
    //     }               
    // }

  } 

    const handleSideBar = () => {
      setShowsidebar((prev) => !prev);
    }

    const handleDeleteProduct = async (id) => {
           try {
        const  response  = await axios.delete(`http://localhost:4000/api/product/${id}`,
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );  
        alert(response.data.message);
        fetchAdminProducts();
      } catch (error) {
        alert(response.data.message);
      }
    }


  return (
    <>
      <div className='relative flex h-full'>

     <AdminSidebar  sidebar={{showsidebar, handleSideBar}}  />
            
     <div className='h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4'>
      <div className="headerbar h-20 w-full border flex items-center justify-between shadow-md shadow-slate-400 px-4">
        {/* Sidebar toggle for mobile */}
        <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
          <RxHamburgerMenu className='text-2xl' />
        </div>

        {/* Main header content */}
        <div className='h-full w-full flex items-center justify-between'>
          <div className='text-3xl font-bold flex-grow lg:text-xl text-center lg:text-left py-3'>
            Products
          </div>
          <div className='text-xl cursor-pointer py-3 bg-slate-200 my-1 px-1 rounded-md' onClick={handleUploadProduct}>
            Upload Product
          </div>
        </div>
      </div>
      

              <div className='flex flex-col'> 


<div className="hidden md:flex h-22 w-full items-center justify-between border-[2px] border-slate-400 p-2">
      <div className="heading text-lg w-44 h-full flex items-center justify-center mx-4 box-border">
        Image
      </div>

      <div className="heading text-lg w-80 h-full flex items-center justify-center p-4 box-border">
        Name
      </div>

      <div className="heading text-lg w-44 h-full flex items-center justify-center py-2 box-border">
        Price
      </div>

      <div className="heading text-lg w-44 h-full flex items-center justify-center py-2 box-border">
        Available Stock
      </div>

      <div className="heading text-lg w-40 h-full flex items-center justify-center">
        Update
      </div>

      <div className="heading text-lg w-40 h-full flex items-center justify-center">
        Remove
      </div>
    </div>


              {
                        adminProducts.map((product, index) => {
                           
                        return (
                   

                    <div className="producttable w-full flex flex-col md:flex-row items-center justify-between border-[2px] border-slate-400 border-t-0 p-4 my-2 rounded-md shadow-md" key={index}>
                    <div className="heading text-xl flex-shrink-0 w-full md:w-24 h-auto my-2 flex items-center justify-center mx-4 box-border">
                      <img src={`http://localhost:4000/${product.image}`} className='w-[120px] h-[120px] object-cover' alt={product.title} />
                    </div>
              
                    <div className="heading text-lg w-full md:w-40 h-auto my-2 flex items-center justify-center p-4 box-border">
                      <p className='text-center'>{product.title}</p>
                    </div>
              
                    <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center py-2 box-border">
                      {product.price}
                    </div>
              
                    <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center py-2 box-border">
                      {product.stock}
                    </div>
              
                    <div className="heading text-lg w-full md:w-20 h-auto my-2 flex items-center justify-center">
                      <div className='w-12 h-12 rounded-full border text-gray-800 hover:bg-[#10151d] hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border' onClick={() => handleUpdateProduct(product._id)}>
                        <TfiPencil className='w-6 h-auto' />
                      </div>
                    </div>
              
                    <div className="heading text-lg w-full md:w-20 h-auto my-2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border" onClick={() => handleDeleteProduct(product._id)}>
                        <RiDeleteBinLine className='w-6 h-auto' />
                      </div>
                    </div>
                  </div>
                        )

                       })
              }
             
              </div>
       </div>

              
            
       </div>
         
         {
               uploadProduct &&  <UploadProduct onClose ={handleUploadProduct}/>
         }
         {
              updateProduct &&  <UpdateProduct onClose={() => handleUpdateProduct(productId)} productDetails={product}/>

         }
    </>
  )
}

export default Products
