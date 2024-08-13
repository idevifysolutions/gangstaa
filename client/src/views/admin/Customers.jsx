import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";

const Customers = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [allusers, setAllusers] = useState([]);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };


  const getAllusers = async () => {       
    try{
        const data = axios.get("http://localhost:4000/api/user/getall", 
            {
            headers: {
                token: localStorage.getItem("token"),
              },
           }
        );
        const Allusers = await data;
        setAllusers(Allusers.data.data);
    }
    catch(error){
           alert(error.message);
           console.log(error);
    }
  }

  useEffect(() => {
      getAllusers();
  }, [])


  const deleteOneuser = async (id) => {
        try{
            const response = axios.delete(`http://localhost:4000/api/user/deleteone/${id}`, 
                {
                    headers: {
                        token: localStorage.getItem("token"),
                      },  
                })
            const deleteduserData = await response;

                console.log(deleteduserData.data.message);
                alert(deleteduserData.data.message);
                getAllusers();
        }
        catch(error){
            alert(error.message);
            console.log(error);
        }
  }

  function removeDomain(email) {
    const [username] = email.split('@');
    return username;
  }


  return (
    <>
      <div className="relative flex h-full">
         <AdminSidebar sidebar={{ showsidebar, handleSideBar }} /> 

         <div className='h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4'>
      <div className="headerbar h-20 w-full border flex items-center justify-between shadow-md shadow-slate-400 px-4">
        {/* Sidebar toggle for mobile */}
        <div className='lg:hidden block cursor-pointer' onClick={handleSideBar}>
          <RxHamburgerMenu className='text-2xl' />
        </div>

        {/* Main header content */}
        <div className='h-full w-full flex items-center justify-between'>
          <div className='text-3xl font-bold flex-grow lg:text-xl text-center lg:text-left py-2'>
            Customers
          </div>
        </div>
      </div>



          <div className="flex flex-col">
           
<div className="hidden md:flex h-22 w-full items-center justify-between border-[2px] border-slate-400 p-2">

      <div className="heading text-lg w-44 h-full flex items-center justify-center mx-4 box-border">
      Avtar
      </div>

      <div className="heading text-lg w-44 h-full flex items-center justify-center p-4 box-border">
        Name
      </div>

      <div className="heading text-lg w-44 h-full flex items-center justify-center py-2 box-border">
      Gender
      </div>

      <div className="heading text-lg w-80 h-full flex items-center justify-center py-2 box-border">
      Email
      </div>

      <div className="heading text-lg w-32 h-full flex items-center justify-center">
      Role
      </div>

      <div className="heading text-lg w-32 h-full flex items-center justify-center">
      Remove
      </div>
    </div>




            {allusers.map((user, index) => {
              return (
           
            <div className="producttable w-full flex flex-col md:flex-row items-center justify-between border-[2px] border-slate-400 border-t-0 p-4 my-2 rounded-md shadow-md" key={index}>

            <div className="heading text-xl flex-shrink-0 w-full md:w-32 h-auto my-2 flex items-center justify-center mx-4 box-border">
              <img src={`https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain`} className='w-[120px] h-[120px] object-cover' alt={user.name} />
            </div>
      
            <div className="heading text-lg w-full md:w-44 h-auto my-2 flex items-center justify-center p-4 box-border">
              <p className='text-center'>{user.name}</p>
            </div>
      
            <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center py-2 box-border">
            Male
            </div>
      
            <div className="heading text-lg w-full md:w-80 h-auto my-2 flex items-center justify-center py-2 box-border flex-wrap">
            {removeDomain(user.email)}
            </div>
      
            <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center">
              <div className='w-12 h-12 rounded-full border text-gray-800 hover:bg-[#10151d] hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border' >
              {user.role}
              </div>
            </div>
      
            <div className="heading text-lg w-full md:w-24 h-auto my-2 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border" onClick={() => deleteOneuser(user._id)}>
                <RiDeleteBinLine className='w-6 h-auto' />
              </div>
            </div>
          </div>









//             <div className="producttable w-full flex flex-col sm:flex-row sm:flex-wrap border-[2px] border-slate-400 border-t-0 p-2">
//   {/* Avatar */}
//   <div className="heading text-lg w-full sm:w-44 h-auto flex items-center justify-center box-border py-2">
//     <img
//       src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
//       className="w-24 sm:w-36 h-auto object-contain"
//       alt="Avatar"
//     />
//   </div>

//   {/* Name */}
//   <div className="heading text-lg w-full sm:w-72 h-auto flex items-center justify-center p-4 box-border py-2">
//     {user.name}
//   </div>

//   {/* Gender */}
//   <div className="heading text-lg w-full sm:w-40 h-auto flex items-center justify-center py-2 box-border">
//     Male
//   </div>

//   {/* Email */}
//   <div className="heading text-lg w-full sm:w-1/2 h-auto flex items-center justify-center py-2 box-border">
//     {user.email}
//   </div>

//   {/* Role */}
//   <div className="heading text-lg w-full sm:w-28 h-auto flex items-center justify-center py-2 box-border">
//     {user.role}
//   </div>

//   {/* Remove Button */}
//   <div className="heading text-lg w-full sm:w-28 h-auto flex items-center justify-center py-2 box-border">
//     <div
//       className="w-10 h-10 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border"
//       onClick={() => deleteOneuser(user._id)}
//     >
//       <RiDeleteBinLine className="w-6 h-auto" />
//     </div>
//   </div>
// </div>

         );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
