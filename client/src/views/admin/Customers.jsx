import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Customers = () => {
  const [showsidebar, setShowsidebar] = useState(false);

  const handleSideBar = () => {
    setShowsidebar((prev) => !prev);
  };

  const arr = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="relative flex h-full">
         <AdminSidebar sidebar={{ showsidebar, handleSideBar }} /> 

        <div className="h-[100vh] w-full overflow-y-auto bg-white p-5 top-0  flex flex-col gap-4">
          <div className="headerbar h-12 w-full border flex items-center justify-between   shadow-md shadow-slate-400">
            <div
              className="lg:hidden block cursor-pointer"
              onClick={handleSideBar}
            >
              <RxHamburgerMenu className="text-2xl m-2" />
            </div>

            <div className="h-[100%] w-[100%] border flex items-center justify-between px-1">
              <div className="text-3xl">Customers</div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="producttable h-22 w-full  flex items-center  border-[2px] border-slate-400 ">
              <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center box-border">
                Avtar
              </div>

              <div className="heading text-lg w-72 h-[90%] my-auto flex items-center justify-center p-4  box-border ">
                Name
              </div>

              <div className="heading text-lg  w-40 h-[90%] my-auto flex items-center justify-center   py-2 box-border">
                {" "}
                Gender
              </div>

              <div className="heading text-lg  w-1/2 h-[90%] my-auto flex items-center justify-center   py-2 box-border ">
                Emial{" "}
              </div>

              <div className="heading text-lg  w-28 h-[90%] my-auto flex items-center justify-center">
                Role
              </div>

              <div className="heading text-lg  w-28 h-[90%] my-auto flex items-center justify-center">
                Remove
              </div>
            </div>

            {arr.map((arr, index) => {
              return (
                <div className="producttable h-22 w-full  flex items-center  border-[2px] border-slate-400 border-t-0" key={index}>
                  <div className="heading text-lg  w-44 h-[90%] my-auto flex items-center justify-center box-border ">
                    <img
                      src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
                      className=" w-36 h-[80%] object-contain "
                      alt=""
                    />
                  </div>

                  <div className="heading text-lg w-72 h-[90%] my-auto flex items-center justify-center p-4  box-border ">
                    Prakash Ghorpade
                  </div>

                  <div className="heading text-lg  w-40 h-[90%] my-auto flex items-center justify-center   py-2 box-border ">
                    {" "}
                    Male
                  </div>

                  <div className="heading text-lg  w-1/2 h-[90%] my-auto flex items-center justify-center   py-2 box-border ">
                    prakashghorpade2001@gmail.com
                  </div>

                  <div className="heading text-lg  w-28 h-[90%] my-auto flex items-center justify-center ">
                    {" "}
                    User
                  </div>

                  <div className="heading text-lg  w-28 h-[90%] my-auto flex items-center justify-center ">
                    <div className="w-10 h-10 rounded-full border text-gray-800 hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:shadow-2xl hover:scale-110 box-border">
                      {" "}
                      <RiDeleteBinLine className="w-6 h-auto" />{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
