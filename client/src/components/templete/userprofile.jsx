
// import {UserData} from "../../context/UserContext

// function UserProfile() {


// const {user}  = UserData();

// console.log(user);

//     return (
//         <div className="flex flex-col w-full h-auto md:flex-row md:h-screen">
//             {/* Left Column */}
//             <div className="w-full p-4 text-center text-white bg-gray-500 md:w-1/4 md:p-6">
//                  <img
//                    src={"https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"}
//                     // alt="Profile"
//                     className="w-24 h-24 mx-auto rounded-full sm:w-32 sm:h-32 md:w-48 md:h-48"
//                 />

//                 <input
//                     type="file"
//                     className="mt-4"
//                 />
//                 <h2 className="mt-4 text-lg font-semibold sm:text-xl">
//                     { user.role || "User"} <br></br> { user.name || "Name"}
//                 </h2>
//                 <p className="text-sm sm:text-base">{ user.email || "user@example.com"}</p>
//             </div>

//             <div className="w-full p-4 md:w-3/4 md:p-6">
//                 <h2 className="mb-4 text-xl font-bold text-center sm:text-2xl">Profile Settings</h2>
//                 <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//                     <div>

//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={user.name}
//                             className="w-full p-2 border"
//                         />
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={user.email}
//                             className="w-full p-2 border"
//                         />
//                     </div>

//                     {/* Phone */}
//                     <div>
//                         <label>Phone</label>
//                         <input
//                             type="number"
//                             name="phone"
//                             value={user.phone}
//                             className="w-full p-2 border"
//                         />
//                     </div>
//                 </div>

//                 <div className="flex justify-center mt-6 space-x-4">
//                         <>
//                             {/* <button
//                                 className="p-2 text-sm font-bold text-white bg-black cursor-pointer sm:text-xl"
//                             >
//                                 Save Info
//                             </button>
//                             <button
//                                 className="p-2 text-sm font-bold text-white bg-black cursor-pointer sm:text-xl"
//                             >
//                                  Edit Profile
//                             </button> */}
//                         </>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserProfile;

import React, { useState, useEffect } from "react";
import { UserData } from "../../context/UserContext";
import HomeProductCard from "../HomeProductCard";

function UserProfile() {
  const { user, setUser } = UserData();
  const [image, setImage] = useState(user.image || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setImage(savedUser.image || "");
    } else {
      setUser({
        name: "",
        email: "",
        phone: "",
        birthday: "",
        gender: "",
        image: "",
        role: "",
      });
      setImage("");
    }
  }, [setUser]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setUser((prevUser) => {
          const updatedUser = { ...prevUser, image: reader.result };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          return updatedUser;
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(""); // Remove the image
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, image: "" };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem("user", JSON.stringify(user)); // Save the user data to localStorage
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex flex-col w-full h-auto md:flex-row md:h-screen">
        {/* Left Column */}
        <div className="w-full p-4 text-center md:w-1/4 md:p-6">
          <img
            src={
              image ||
              "https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
            }
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full sm:w-32 sm:h-32 md:w-48 md:h-48"
          />
          <input
            id="fileInput"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="px-4 py-2 mt-4 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          >
            Choose File
          </button>
          <button
            onClick={handleRemoveImage}
            className="px-4 py-2 mt-4 text-sm font-semibold text-gray-800 bg-white border border-gray-300 rounded cursor-pointer hover:bg-gray-200"
          >
            Remove Image
          </button>
          <h2 className="mt-4 text-lg font-semibold sm:text-xl">
            {user.role || "User"} <br /> {user.name || "Name"}
          </h2>
          <p className="text-sm sm:text-base">
            {user.email || "user@example.com"}
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full p-4 md:w-3/4 md:p-6">
          <h2 className="m-4 text-2xl font-semibold text-center sm:text-2xl">
            Welcome To GangsTaa!
            <h1 className="mt-4 text-4xl font-light">{user.name}</h1>
          </h2>
          <div className="grid grid-cols-1 gap-4 p-16 mt-12 border-2 rounded-lg shadow-lg md:grid-cols-2">
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full p-2 border"
                disabled={!isEditing} // Disable the input field if not editing
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full p-2 border"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full p-2 border"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label>Birthday</label>
              <input
                type="date"
                name="birthday"
                value={user.birthday}
                onChange={handleChange}
                className="w-full p-2 border"
                disabled={!isEditing}
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="w-full p-2 border"
                disabled={!isEditing}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="p-2 text-sm font-bold text-white bg-black cursor-pointer sm:text-xl"
              >
                Save Info
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="w-full p-2 text-sm font-bold text-white bg-black rounded-md cursor-pointer lg:w-44 sm:text-xl"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
      <HomeProductCard />
    </>
  );
}

export default UserProfile;
