import React, { useState } from 'react';
import defaultImage from "../../data/image.jpeg";
import '@fortawesome/fontawesome-free/css/all.min.css';

function UserProfile() {
  const [image, setImage] = useState(defaultImage);
  const [name, setName] = useState('Ashanka Dongare');
  const [email, setEmail] = useState('ashankad343@gmail.com');
  const [address, setAddress] = useState('Ashanka Dongare, At post Haregoan, Tq Ausa Dis Latur, 413520 M.S.Bidve Engineering College of Latur Maharashtra, India, +919373338274');
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  
  // Mock order history data
  const orderHistory = [
    { id: 1, date: '2024-08-01', status: 'Delivered', total: '$100' },
    { id: 2, date: '2024-07-25', status: 'Processing', total: '$80' }
  ];

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save button handler
  const handleSave = () => {
    setIsEditingName(false);
    setIsEditingEmail(false);
    setIsEditingAddress(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Profile Image and Edit */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <img
            src={image}
            alt="Profile"
            className="w-16 h-16 xs:w-24 xs:h-24 sm:w-32 sm:h-32 rounded-full border-2 border-gray-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute top-0 left-0 w-16 h-16 xs:w-24 xs:h-24 sm:w-32 sm:h-32 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Name Section */}
      <div className="mb-4">
        <label className="block text-xs xs:text-sm font-medium text-gray-700 flex items-center">
          <div className="flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 bg-gray-200 rounded-full">
            <i className="fas fa-user text-black"></i>
          </div>
          <span className="ml-2">Name</span>
        </label>
        {isEditingName ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p>{name}</p>
        )}
        <button
          onClick={() => setIsEditingName(!isEditingName)}
          className="mt-2 text-blue-600 hover:underline"
        >
          {isEditingName ? 'Save' : 'Edit'}
        </button>
      </div>
      
      {/* Email Section */}
      <div className="mb-4">
        <label className="block text-xs xs:text-sm font-medium text-gray-700 flex items-center">
          <div className="flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 bg-gray-200 rounded-full">
            <i className="fas fa-envelope text-black"></i>
          </div>
          <span className="ml-2">Email</span>
        </label>
        {isEditingEmail ? (
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p>{email}</p>
        )}
        <button
          onClick={() => setIsEditingEmail(!isEditingEmail)}
          className="mt-2 text-blue-600 hover:underline"
        >
          {isEditingEmail ? 'Save' : 'Edit'}
        </button>
      </div>

      {/* Address Section */}
      <div className="mb-4">
        <label className="block text-xs xs:text-sm font-medium text-gray-700 flex items-center">
          <div className="flex items-center justify-center w-6 h-6 xs:w-8 xs:h-8 bg-gray-200 rounded-full">
            <i className="fas fa-map-marker-alt text-black"></i>
          </div>
          <span className="ml-2">Address</span>
        </label>
        {isEditingAddress ? (
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        ) : (
          <p>{address}</p>
        )}
        <button
          onClick={() => setIsEditingAddress(!isEditingAddress)}
          className="mt-2 text-blue-600 hover:underline"
        >
          {isEditingAddress ? 'Save' : 'Edit'}
        </button>
      </div>
      
      {/* Order History */}
      <div className="mt-6 flex justify-center">
        <div className="w-full">
          <h2 className="text-lg xs:text-xl font-semibold mb-4 text-center">Order History</h2>
          <table className="w-full table-auto text-center">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-xs xs:text-sm">Order ID</th>
                <th className="border px-4 py-2 text-xs xs:text-sm">Date</th>
                <th className="border px-4 py-2 text-xs xs:text-sm">Status</th>
                <th className="border px-4 py-2 text-xs xs:text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderHistory.map((order) => (
                <tr key={order.id}>
                  <td className="border px-4 py-2 text-xs xs:text-sm">{order.id}</td>
                  <td className="border px-4 py-2 text-xs xs:text-sm">{order.date}</td>
                  <td className="border px-4 py-2 text-xs xs:text-sm">{order.status}</td>
                  <td className="border px-4 py-2 text-xs xs:text-sm">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-xs xs:text-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfile;



// import React, { useState } from "react";

// // Replace with a direct URL to an image
// const defaultImage = "https://example.com/path/to/your/image.jpeg";

// function UserProfile() {
//   const [image, setImage] = useState(defaultImage);
//   const [isEditingProfile, setIsEditingProfile] = useState(false);
//   const [isProfileSaved, setIsProfileSaved] = useState(false); // New state to track if profile is saved
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // State for editing addresses
//   const [isEditingAddresses, setIsEditingAddresses] = useState(false);
//   const [address1, setAddress1] = useState("123 Main St, City, Country");
//   const [address2, setAddress2] = useState("456 Oak St, City, Country");

//   // Mock Data for Order History
//   const [orders] = useState([
//     { id: 1, date: "2024-08-01", total: "$150.00", status: "Delivered" },
//     { id: 2, date: "2024-07-25", total: "$85.00", status: "In Transit" },
//   ]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     setIsEditingProfile(false);
//     setIsEditingAddresses(false);
//     setIsProfileSaved(true); // Mark profile as saved
//     // Add logic to save the edited information here
//   };

//   const handleDelete = () => {
//     // Logic to handle deleting user info
//     setName("");
//     setEmail("");
//     setPhone("");
//     setIsProfileSaved(false); // Reset profile saved state
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 bg-gray-100">
//       {/* User Info */}
//       <div className="bg-gray-200 border rounded-lg shadow-lg p-6 mb-8">
//         <div className="flex justify-center">
//           <div className="w-full max-w-4xl">
//             <div className="flex">
//               {/* User Image and Sidebar */}
//               <div className="w-1/3 text-center">
//                 <img
//                   src={image}
//                   alt="User"
//                   className="w-32 h-32 mx-auto mb-4 border rounded-full"
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
//                 />
//               </div>

//               {/* User Details */}
//               <div className="w-2/3 pl-6">
//                 <h2 className="text-2xl font-bold mb-6">User Information</h2>

//                 <div className="space-y-4">
//                   <div className="flex items-center">
//                     <label className="w-1/3 text-sm font-semibold">Name</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-md"
//                       readOnly={!isEditingProfile}
//                     />
//                   </div>

//                   <div className="flex items-center">
//                     <label className="w-1/3 text-sm font-semibold">Email</label>
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-md"
//                       readOnly={!isEditingProfile}
//                     />
//                   </div>

//                   <div className="flex items-center">
//                     <label className="w-1/3 text-sm font-semibold">Phone</label>
//                     <input
//                       type="text"
//                       placeholder="Enter your phone number"
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       className="w-full px-4 py-2 border rounded-md"
//                       readOnly={!isEditingProfile}
//                     />
//                   </div>
//                 </div>

//                 <div className="text-center mt-6">
//                   {!isProfileSaved ? (
//                     <button
//                       onClick={() => setIsEditingProfile(!isEditingProfile)}
//                       className="px-4 py-2 text-white bg-black hover:bg-gray-800"
//                     >
//                       {isEditingProfile ? "Cancel" : "Update Profile"}
//                     </button>
//                   ) : (
//                     <div className="flex justify-center space-x-4">
//                       <button
//                         onClick={() => setIsEditingProfile(true)}
//                         className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={handleDelete}
//                         className="px-4 py-2 text-white bg-red-500 hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Address Book Section */}
//       <div className="bg-gray-200 border rounded-lg shadow-lg p-6 mb-8 mx-auto max-w-4xl">
//         <h2 className="mb-4 text-2xl font-bold text-center">Address Book</h2>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-semibold">Address 1</label>
//           <textarea
//             className="w-full px-4 py-2 border rounded-md"
//             rows="3"
//             placeholder="Enter Address 1"
//             value={address1}
//             onChange={(e) => setAddress1(e.target.value)}
//             readOnly={!isEditingAddresses}
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-semibold">Address 2</label>
//           <textarea
//             className="w-full px-4 py-2 border rounded-md"
//             rows="3"
//             placeholder="Enter Address 2"
//             value={address2}
//             onChange={(e) => setAddress2(e.target.value)}
//             readOnly={!isEditingAddresses}
//           />
//         </div>

//         <div className="text-center">
//           <button
//             onClick={() => setIsEditingAddresses(!isEditingAddresses)}
//             className="px-4 py-2 m-2 text-white duration-200 bg-black hover:bg-gray-800"
//           >
//             {isEditingAddresses ? "Cancel" : "Update Addresses"}
//           </button>
//         </div>
//       </div>

//       {/* Order History Section */}
//       <div className="bg-gray-200 border rounded-lg shadow-lg p-6 mb-8 mx-auto max-w-4xl">
//         <h2 className="mb-4 text-2xl font-bold text-center">Order History</h2>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-center border">Order ID</th>
//                 <th className="px-4 py-2 text-center border">Date</th>
//                 <th className="px-4 py-2 text-center border">Status</th>
//                 <th className="px-4 py-2 text-center border">Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.id}>
//                   <td className="px-4 py-2 text-center border">{`#${order.id}`}</td>
//                   <td className="px-4 py-2 text-center border">{order.date}</td>
//                   <td className="px-4 py-2 text-center border">{order.status}</td>
//                   <td className="px-4 py-2 text-center border">{order.total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Save Button */}
//       <div className="mt-6 text-center">
//         <button
//           onClick={handleSave}
//           className="px-4 py-2 m-2 text-white duration-200 bg-black hover:bg-gray-800"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;
