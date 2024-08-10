import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";


const UpdateProduct = ({onClose}) => {
  const [data,setData] = useState({
    title : "",
    description : "",
    stock : "",
    price : "",
    image : "",
    sold : "",
    category : ""
  })


//   const productCategory = [
//     { id : 1, label : "Pants", value : "Pants"},
//     { id : 2, label : "Shirt", value : "Shirt"},
//     { id : 3, label : "Jeans", value : "Jeans"},
//     { id : 4, label : "Houddy", value :"Houddy"},
//     { id : 5, label : "T-shirt", value :  "T-shirt"},
// ]
  

  const handleOnChange = (e)=>{
      const { name, value} = e.target

      setData((preve)=>{
        return{
          ...preve,
          [name]  : value
        }
      })
  }

  const handleUploadProduct = async(e) => {
    const file = e.target.files;
    console.log("files", file);
    setData((preve)=>{
      return{
        ...preve,
        image: file[0]
      }
    })
  }

  


  {/**upload product */}
  const handleSubmit = async(e) =>{
    e.preventDefault()

    if(!data.image){
      return alert("Please upload product Image");
  }
  if(!data.description){
      return alert("Please Enter Product description");
  }

  const response = await fetch( "http://localhost:4000/api/product/new" ,{
    method : "post",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify(data)
  })

  const responseData = await response.json();

  alert(responseData?.message)
  console.log("Product Data", data);
  onClose()


  }



  return (
    <div className='fixed w-full  h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
       <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden logincontainer'>

            <div className='flex justify-between items-center pb-3'>
                <h2 className='font-bold text-lg'>Upload Product</h2>
                <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer ' onClick={onClose}>
                    <CgClose/>
                </div>
            </div>

          <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
            <label htmlFor='productName'>Product Name :</label>
            <input 
              type='text' 
              id='productName' 
              placeholder='enter product name' 
              name='title'
              value={data.title} 
              onChange={handleOnChange}
              className='p-2 bg-slate-100 border rounded inputbox'
              required
            />


            <label htmlFor='productName'>Product Category :</label>
            <input 
              type='text' 
              id='productcategory' 
              placeholder='enter product category' 
              name='category'
              value={data.category} 
              onChange={handleOnChange}
              className='p-2 bg-slate-100 border rounded inputbox'
              required
            />


          <label htmlFor='stock' className='mt-3'>Product stock :</label>
              <input 
                type='text' 
                id='stock' 
                placeholder='enter available stock' 
                value={data.stock} 
                name='stock'
                onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded inputbox'
                required
              />

              {/* <label htmlFor='category' className='mt-3'>Category :</label>
              <select required value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-100 border rounded inputbox'>
                  <option value={""}>Select Category</option>
                  {
                    productCategory.map((el,index)=>{
                      return(
                        <option value={el.value} key={el.value+index}>{el.label}</option>
                      )
                    })
                  }
              </select> */}

              <label htmlFor='productImage' className='mt-3'>Product Image :</label>
              <label htmlFor='uploadImageInput'>
              <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer inputbox'>
                        <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                          <span className='text-4xl'><FaCloudUploadAlt/></span>
                          <p className='text-sm'>Upload Product Image</p>
                          <input type='file' id='uploadImageInput'  className='hidden' onChange={handleUploadProduct}/>
                        </div>
              </div>
              </label> 
              <div>
                  {/* {
                    data?.productImage[0] ? (
                        <div className='flex items-center gap-2'>
                            {
                              data.productImage.map((el,index)=>{
                                return(
                                  <div className='relative group'>
                                      <img 
                                        src={el} 
                                        alt={el} 
                                        width={80} 
                                        height={80}  
                                        className='bg-slate-100 border cursor-pointer'  
                                       />

                                        <div className='absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteProductImage(index)}>
                                          <MdDelete/>  
                                        </div>
                                  </div>
                                  
                                )
                              })
                            }
                        </div>
                    ) : (
                      <p className='text-red-600 text-xs'>*Please upload product image</p>
                    )
                  } */}
                  
              </div>

              <label htmlFor='price' className='mt-3'>Price :</label>
              <input 
                type='text' 
                id='price' 
                placeholder='enter price' 
                value={data.price} 
                name='price'
                onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded inputbox'
                required
              />


              <label htmlFor='sellingPrice' className='mt-3'>Product Sold :</label>
              <input 
                type='text' 
                id='sellingPrice' 
                placeholder='enter sold products' 
                value={data.sold} 
                name='sold'
                onChange={handleOnChange}
                className='p-2 bg-slate-100 border rounded inputbox'
                required
              />

              <label htmlFor='description' className='mt-3'>Description :</label>
              <textarea 
                className='h-28 bg-slate-100 border rounded resize-none p-1 inputbox' 
                placeholder='enter product description' 
                rows={3} 
                onChange={handleOnChange} 
                name='description'
                value={data.description}
              >
              </textarea>





              <button className='px-3 py-2  mb-10 addtocartbtn border-slate-300 bg-slate-100 text-black rounded border hover:border hover:border-black'>Upload Product</button>
          </form> 



      
       </div>

    </div>
  )
}

export default UpdateProduct