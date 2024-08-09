import React, { useState } from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { TfiPencil } from "react-icons/tfi";
import { RiDeleteBinLine } from "react-icons/ri";
import UploadProduct from '../../components/admin/uploadProduct';


const Products = () => {
        
    const [uploadProduct, setUploadProduct] = useState(false);

    const  handleUploadProduct = () => {
              
        setUploadProduct((prev) => !prev);
    } 

  return (
    <>
      <div className='relative flex h-full'>

       <AdminSidebar/>
            
       <div className='h-[100vh] w-full overflow-y-auto bg-white p-5 top-0  flex flex-col gap-4'>

              <div className="headerbar h-12 w-full border flex items-center justify-between  p-4 shadow-md shadow-slate-400">
                   
                   <div className='text-3xl'>Products</div>
                   <div className='text-xl cursor-pointer' onClick={handleUploadProduct}> Upload Product</div>

              </div>

              <div className='flex flex-col'> 
                
              <div className="producttable h-14 w-full flex items-center justify-between border-[2px] border-slate-400">
                     <div className="heading text-xl  w-44 my-auto text-center py-2"> Image  </div>
                     <div className="heading text-xl  w-80 my-auto text-center py-2"> Name</div>
                     <div className="heading text-xl w-44 my-auto text-center py-2"> Price</div>
                     <div className="heading text-xl  w-44 my-auto text-center py-2">  Available Stock </div>
                     <div className="heading text-xl  w-40 my-auto text-center py-2"> Update </div>
                     <div className="heading text-xl  w-40 my-auto text-center py-2"> Remove  </div>
              </div>

              <div className="producttable h-44 w-full  flex items-center justify-between border-[2px] border-slate-400 border-t-0 ">
                     <div className="heading text-xl  w-44 h-[90%] my-2 flex items-center justify-center mx-4">
                         <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804"  className=' w-full h-[100%] object-contain' alt="" />
                     </div>


                     <div className="heading text-lg w-80 h-[90%] my-auto mx-auto flex items-center justify-center p-4 "> 
                        <p>Puma Shoes Air Jordan Cook Nigga 2023</p>
                     </div>

                     <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center   py-2">₹ 2200</div>
                     <div className="heading text-xl  w-44 h-[90%] my-auto flex items-center justify-center   py-2"> 880 </div>
                     <div className="heading text-xl  w-40 h-[90%] my-auto flex items-center justify-center"> 

                        <div className='w-16 h-16 rounded-full border text-gray-800 hover:bg-[#10151d] hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110'>   
                        <TfiPencil className='w-10 h-auto'/>
                        </div>
 
                     </div>
                     <div className="heading text-xl  w-40 h-[90%] my-auto flex items-center justify-center"> 
                     <div className="w-16 h-16 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110"> <RiDeleteBinLine className='w-10 h-auto'/>  </div>
              </div>
              </div>
              </div>
       </div>

              
            
       </div>
         
         {
               uploadProduct &&  <UploadProduct onClose ={handleUploadProduct}/>
         }
    </>
  )
}

export default Products
