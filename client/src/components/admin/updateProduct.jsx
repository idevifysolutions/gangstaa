import React, { useState } from 'react';
import { CgClose } from "react-icons/cg";
import axios from 'axios';
import { ProductData } from '../../context/ProductContext';

const UpdateProduct = ({ onClose, productDetails }) => {
  const { fetchAdminProducts } = ProductData();

  const [data,setData] = useState({
    ...productDetails,
    stock : productDetails?.stock,
  });

  const [updatedStock, setUpdatedStock] = useState(0);


  const handleOnChange = (e)=>{
    setUpdatedStock(e.target.value);
    console.log("updated stock", updatedStock);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = productDetails._id;

    const updateddata = { stock: updatedStock};

    try {
      const response = await axios.put(`http://localhost:4000/api/product/updatestock/${id}`, updateddata, {
        headers: {
          token: localStorage.getItem("token"),
        },
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

        <form className='grid p-4  overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
      
          <label htmlFor='stock' className='mt-3'>Product Stock :</label>
          <input
            type='text'
            id='stock'
            placeholder='enter available stock'
            value={data.stock}
            name='stock'
            className=' bg-slate-100 border rounded inputbox'
            required
            readOnly
          />


          <label htmlFor='updatedstock' className='mt-3'> Enter Updated Stock :</label>
          <input
            type='text'
            id='updatedstock'
            placeholder='enter price'
            value={updatedStock}
            name='updatedstock'
            onChange={handleOnChange}
            className=' bg-slate-100 border rounded inputbox'
            required
          />

          <button className='px-2 py-1 mb-10 addtocartbtn border-slate-300 bg-slate-100 text-black rounded border hover:border hover:border-black'>Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct;
