import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import {UserData} from '../../context/UserContext';
import Loader from "../../components/admin/Loader";

const Customers = () => {
  const [showsidebar, setShowsidebar] = useState(false);
  const [allusers, setAllusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const {user} = UserData();
  const loginuser = user;

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const getAllusers = async () => {
    try {
      setLoading((prev) => !prev); 
      const data = axios.get(`${import.meta.env.VITE_SERVER}/api/user/getall`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      const Allusers = await data;
      setAllusers(Allusers.data.data);
      setLoading((prev) => !prev); 
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    getAllusers();
  }, []);

  const deleteOneuser = async (id) => {
    try {
      const response = axios.delete(
        `${import.meta.env.VITE_SERVER}/api/user/deleteone/${id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      const deleteduserData = await response;

      console.log(deleteduserData.data.message);
      alert(deleteduserData.data.message);
      getAllusers();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const Updateuser = async (id) => {
    if (confirm("you wnat to update users role")) {
      try {
        const response = axios.put(
          `${import.meta.env.VITE_SERVER}/api/user/updateRole/${id}`,
          {},
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        );
        const updateduserData = await response;

        console.log(updateduserData);
        alert("user role Updated successfully");
        getAllusers();
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    }
  };

  function removeDomain(email) {
    const [username] = email.split("@");
    return username;
  }

  return (
    <>
    {
       loading ? <Loader/> :
   
      <div className="relative flex h-full">
        <AdminSidebar sidebar={{ showsidebar, handleSideBar }} />

        <div className="h-[100vh] w-full overflow-y-auto bg-white p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between w-full h-10 p-6 border shadow-md headerbar shadow-gray-200">
            <div
              className="block cursor-pointer lg:hidden"
              onClick={handleSideBar}
            >
              <RxHamburgerMenu className="text-2xl" />
            </div>
            <div className="flex-grow py-3 text-xl font-bold text-center lg:text-left">
              Customers
            </div>
          </div>

          <main className="flex-grow">
            <div className="items-center justify-center w-full h-full overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                    <th className="px-6 py-3 text-center">Avtar</th>
                    <th className="px-6 py-3 text-center">Name</th>
                    <th className="px-6 py-3 text-center">Gender</th>
                    <th className="px-6 py-3 text-center">Email</th>
                    <th className="px-6 py-3 text-center">Update Role</th>
                    <th className="px-6 py-3 text-center">Remove</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-600">
                  {allusers.map((user, index) => {
                    return (
<tr
  className={`border-b border-gray-200 ${user.email === loginuser.email ? 'bg-gray-700 text-white' : 'hover:bg-gray-100'}`}
  key={index}
>
  <td className="px-6 py-3 text-center">
    <img
      src={`https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain`}
      className={`h-[50px] object-cover rounded-full ${user.email === loginuser.email ? '' : 'mix-blend-multiply'}`}
      alt={user.name}
    />
  </td>

                        <td className="px-6 py-3 text-center">{user.name}</td>
                        <td className="px-6 py-3 text-center"> Male</td>
                        <td className="px-6 py-3 text-center">
                          {" "}
                          {removeDomain(user.email)}
                        </td>

                        <td className={`flex items-center justify-between gap-2 px-6 py-3 ${user.email == loginuser.email ? '' : 'hover:cursor-pointer'}`}>
                          <p className={` ${user.email == loginuser.email ? 'mt-3' : ''}`} >{user.role}</p>

                          { user.email == loginuser.email? <h2 className="mt-3 w-36  sm:w-[100%]">This is your info...</h2>: 
                          
                           <button
                            className="p-2 text-white bg-black rounded-md"
                            onClick={() => Updateuser(user._id)}
                          > 
                            Update Role
                          </button> 
                          
                          }
                        </td>

                        <td className={`px-6 py-3  ${user.email == loginuser.email ? '' : 'hover:cursor-pointer'}`}>
                        { user.email == loginuser.email? '':  <div
                            className="w-12 p-2 border-2 rounded-full hover:bg-red-600"
                            onClick={() => deleteOneuser(user._id)}
                          >
                             <RiDeleteBinLine className="w-6 h-auto mx-auto" /> 
                          </div> }
                        </td> 
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    }
    </>
  );
};

export default Customers;
