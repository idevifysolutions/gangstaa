import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import UploadProduct from '../../components/admin/uploadProduct';
import { RxHamburgerMenu } from "react-icons/rx";
import UpdateProduct from '../../components/admin/updateProduct';


const Products = () => {
        
    const [uploadProduct, setUploadProduct] = useState(false);
    const [updateProduct, setUpdateProduct] = useState(false);
    const [showsidebar, setShowsidebar] = useState(false);

    const  handleUploadProduct =  () => {
        setUploadProduct((prev) => !prev);
    } 

    const handleUpdateProduct = () => {
      setUpdateProduct((prev) => !prev);
  } 

    const handleSideBar = () => {
      setShowsidebar((prev) => !prev);
    }

    const arr = [1, 2, 3, 4, 5];


    




  return (
    <>
      <div className='relative flex h-full'>

       <AdminSidebar sidebar={{showsidebar, setShowsidebar, handleSideBar}}/>
            
       <div className='h-[100vh] w-full overflow-y-auto bg-white p-5 top-0  flex flex-col gap-4'>

              <div className="headerbar h-12 w-full border flex items-center justify-between   shadow-md shadow-slate-400">
                   <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
                      
                       <RxHamburgerMenu  className='text-2xl m-2'/>

                   </div>

                   <div className='h-[100%] w-[100%] border flex items-center justify-between px-1'>
                   <div className='text-3xl'>Products</div>
                   <div className='text-xl cursor-pointer' onClick={handleUploadProduct}> Upload Product</div>
                   </div>
              </div>

              <div className='flex flex-col'> 

              <div className="producttable h-22 w-full  flex items-center justify-between border-[2px] border-slate-400 ">

                     <div className="heading text-lg  w-44 h-[90%] my-2 flex items-center justify-center mx-4 box-border">
                     Image
                     </div>


                     <div className="heading text-lg w-80 h-[90%] my-auto mx-auto flex items-center justify-center p-4  box-border"> 
                     Name
                     </div>

                     <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center   py-2 box-border"> Price</div>

                     <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center   py-2 box-border">Available Stock  </div>

                     <div className="heading text-lg  w-40 h-[90%] my-auto flex items-center justify-center"> 
                     Update
                     </div>
                     
                     <div className="heading text-lg  w-40 h-[90%] my-auto flex items-center justify-center "> 
                     Remove
                   </div>
              </div>


              {
                       arr.map((arr, index) => {
                           
                        return (
                            <div className="producttable h-44 w-full  flex items-center justify-between border-[2px] border-slate-400 border-t-0 " key={index}>
                            <div className="heading text-xl  w-44 h-[90%] my-2 flex items-center justify-center mx-4 box-border">
                                <img src="https://th.bing.com/th/id/OIP.xKRlmHeOnnoduRo5F_PY-gHaIh?rs=1&pid=ImgDetMain"  className=' w-full h-[100%] object-contain' alt="" />
                            </div>
       
       
                            <div className="heading text-lg w-80 h-[90%] my-auto mx-auto flex items-center justify-center p-4  box-border"> 
                               <p>Puma Shoes Air Jordan Cook Nigga 2023</p>
                            </div>
       
                            <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center   py-2 box-border">₹ 2200</div>
                            <div className="heading text-xl  w-44 h-[90%] my-auto flex items-center justify-center   py-2 box-border"> 880 </div>
                            <div className="heading text-xl  w-40 h-[90%] my-auto flex items-center justify-center"> 
       
                               <div className='w-16 h-16 rounded-full border text-gray-800 hover:bg-[#10151d] hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border' onClick={handleUpdateProduct}>   
                               <TfiPencil className='w-10 h-auto'/>
                               </div>
        
                            </div>
                            <div className="heading text-xl  w-40 h-[90%] my-auto flex items-center justify-center "> 
                            <div className="w-16 h-16 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border"> <RiDeleteBinLine className='w-10 h-auto'/>  </div>
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
              updateProduct &&  <UpdateProduct onClose={handleUpdateProduct} />

         }
    </>
  )
}

export default Products
