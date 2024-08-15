import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import axios from 'axios';
import { ProductData } from '../../context/ProductContext';

const UpdateProduct = ({ onClose, productDetails }) => {
  const { fetchAdminProducts } = ProductData();

  const [data,setData] = useState({
    ...productDetails,
    title : productDetails?.title,
    description : productDetails?.description,
    category : productDetails?.category,
    price : productDetails?.price,
    stock : productDetails?.stock,
    sold : productDetails?.sold,
  })


  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name]  : value
      }
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = productDetails._id;
    console.log(localStorage.getItem("token"));


    try {
      const response = await axios.put(`http://localhost:4000/api/product/${id}`,{
        headers: {
          token: localStorage.getItem("token"),
        },
        body:JSON.stringify(data),
      });


      if (response.data.message) {
        alert(response.data.message);
        fetchAdminProducts();
        onClose();
      }
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-35 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden logincontainer'>
        <div className='flex justify-between items-center pb-3'>
          <h2 className='font-bold text-lg'>Update Product</h2>
          <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}>
            <CgClose />
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

          <label htmlFor='productCategory'>Product Category :</label>
          <input
            type='text'
            id='productCategory'
            placeholder='enter product category'
            name='category'
            value={data.category}
            onChange={handleOnChange}
            className='p-2 bg-slate-100 border rounded inputbox'
            required
          />

          <label htmlFor='stock' className='mt-3'>Product Stock :</label>
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
          />

          <button className='px-3 py-2 mb-10 addtocartbtn border-slate-300 bg-slate-100 text-black rounded border hover:border hover:border-black'>Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
