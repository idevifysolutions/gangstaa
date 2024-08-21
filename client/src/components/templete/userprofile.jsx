

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

// function UserProfile() {
//     const [userInfo, setUserInfo] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         phone: '',
//         address: '',
//         image: null,
//     });

//     const [showPopup, setShowPopup] = useState(false);
//     const [showDeletePopup, setShowDeletePopup] = useState(false); // New state for delete confirmation
//     const [isEditMode, setIsEditMode] = useState(true);
//     const [errors, setErrors] = useState({});

//     // Fetch user data when the component mounts
//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/user', {
//                     params: { email: userInfo.email }
//                 });
//                 setUserInfo(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         setUserInfo({
//             ...userInfo,
//             image: e.target.files[0],
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!userInfo.name) newErrors.name = "Name is required";
//         if (!userInfo.surname) newErrors.surname = "Surname is required";
//         if (!userInfo.email) newErrors.email = "Email is required";
//         if (!userInfo.phone) newErrors.phone = "Phone is required";
//         if (!userInfo.address) newErrors.address = "Address is required";
//         return newErrors;
//     };

//     const handleSubmit = async () => {
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         setShowPopup(true); // Show popup immediately

//         const formData = new FormData();
//         formData.append('name', userInfo.name);
//         formData.append('surname', userInfo.surname);
//         formData.append('email', userInfo.email);
//         formData.append('phone', userInfo.phone);
//         formData.append('address', userInfo.address);

//         if (userInfo.image) {
//             formData.append('image', userInfo.image);
//         }

//         try {
//             await axios.post('http://localhost:4000/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setIsEditMode(false);
//             setErrors({});
//         } catch (error) {
//             console.error('Error updating profile:', error.message || error);
//         }
//     };

//     const clearInfo = () => {
//         setUserInfo({
//             name: '',
//             surname: '',
//             email: '',
//             phone: '',
//             address: '',
//             image: null,
//         });
//         setErrors({});
//         setShowDeletePopup(true); // Show delete confirmation message
//     };

//     const handleEditProfile = () => {
//         setIsEditMode(true);
//     };

//     return (
//         <div className="flex w-full h-screen">
//             {/* Left Column (25%) */}
//             <div className="w-1/4 bg-gray-500 p-6 text-center text-white">
//                 <img 
//                     src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
//                     alt="Profile" 
//                     className="rounded-full mx-auto w-32 h-32"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleFileChange}
//                     className="mt-4"
//                     disabled={!isEditMode}
//                 />
//                 <h2 className="mt-4 text-xl font-semibold">
//                     {userInfo.name || "User"} {userInfo.surname || "Name"}
//                 </h2>
//                 <p>{userInfo.email || "user@example.com"}</p>
//             </div>

//             {/* Right Column (75%) */}
//             <div className="w-3/4 p-6">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Profile Settings</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     {/* Name */}
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={userInfo.name}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                     </div>
//                     {/* Surname */}
//                     <div>
//                         <label>Surname</label>
//                         <input
//                             type="text"
//                             name="surname"
//                             value={userInfo.surname}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
//                     </div>
//                     {/* Email */}
//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={userInfo.email}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                     {/* Phone */}
//                     <div>
//                         <label>Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={userInfo.phone}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                     </div>
//                     {/* Address */}
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={userInfo.address}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//                     </div>
//                 </div>

//                 <div className="mt-4 flex justify-center space-x-4">
//                     {isEditMode ? (
//                         <>
//                             <button
//                                 onClick={clearInfo}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Delete Profile
//                             </button>
//                             <button
//                                 onClick={handleSubmit}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Save Info
//                             </button>
//                         </>
//                     ) : (
//                         <button
//                             onClick={handleEditProfile}
//                             className="p-2 text-xl font-bold text-white bg-black cursor-pointer rounded"
//                         >
//                             Edit Profile
//                         </button>
//                     )}
//                 </div>

//                 {/* Popup Notification */}
//                 {showPopup && (
//                     <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                         Your profile will be submitted.
//                     </div>
//                 )}

//                 {/* Delete Confirmation Popup */}
//                 {showDeletePopup && (
//                     <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//                         Your profile will be deleted.
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default UserProfile;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

// function UserProfile() {
//     const [userInfo, setUserInfo] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         phone: '',
//         address: '',
//         image: null,
//     });

//     const [showPopup, setShowPopup] = useState(false);
//     const [isEditMode, setIsEditMode] = useState(true);
//     const [errors, setErrors] = useState({});

//     // Fetch user data when the component mounts
//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/myProfile', {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming you're storing JWT in localStorage
//                     },
//                 });
//                 const { user } = response.data;
//                 setUserInfo({
//                     name: user.name || '',
//                     surname: user.surname || '',
//                     email: user.email || '',
//                     phone: user.phone || '',
//                     address: user.address || '',
//                     image: user.image || null,
//                 });
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         setUserInfo({
//             ...userInfo,
//             image: e.target.files[0],
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!userInfo.name) newErrors.name = "Name is required";
//         if (!userInfo.surname) newErrors.surname = "Surname is required";
//         if (!userInfo.email) newErrors.email = "Email is required";
//         if (!userInfo.phone) newErrors.phone = "Phone is required";
//         if (!userInfo.address) newErrors.address = "Address is required";
//         return newErrors;
//     };

//     const handleSubmit = async () => {
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         setShowPopup(true); // Show popup immediately

//         const formData = new FormData();
//         formData.append('name', userInfo.name);
//         formData.append('surname', userInfo.surname);
//         formData.append('email', userInfo.email);
//         formData.append('phone', userInfo.phone);
//         formData.append('address', userInfo.address);

//         if (userInfo.image) {
//             formData.append('image', userInfo.image);
//         }

//         try {
//             await axios.post('http://localhost:4000/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                     Authorization: `Bearer ${localStorage.getItem('token')}`, // Adding JWT token to the header
//                 },
//             });
//             setIsEditMode(false);
//             setErrors({});
//         } catch (error) {
//             console.error('Error updating profile:', error.message || error);
//         }
//     };

//     const clearInfo = () => {
//         setUserInfo({
//             name: '',
//             surname: '',
//             email: '',
//             phone: '',
//             address: '',
//             image: null,
//         });
//         setErrors({});
//         setShowPopup(true); // Show popup message when clearing profile info
//     };

//     const handleEditProfile = () => {
//         setIsEditMode(true);
//     };

//     return (
//         <div className="flex w-full h-screen">
//             {/* Left Column (25%) */}
//             <div className="w-1/4 bg-gray-500 p-6 text-center text-white">
//                 <img 
//                     src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
//                     alt="Profile" 
//                     className="rounded-full mx-auto w-32 h-32"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleFileChange}
//                     className="mt-4"
//                     disabled={!isEditMode}
//                 />
//                 <h2 className="mt-4 text-xl font-semibold">
//                     {userInfo.name || "User"} {userInfo.surname || "Name"}
//                 </h2>
//                 <p>{userInfo.email || "user@example.com"}</p>
//             </div>

//             {/* Right Column (75%) */}
//             <div className="w-3/4 p-6">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Profile Settings</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     {/* Name */}
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={userInfo.name}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                     </div>
//                     {/* Surname */}
//                     <div>
//                         <label>Surname</label>
//                         <input
//                             type="text"
//                             name="surname"
//                             value={userInfo.surname}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
//                     </div>
//                     {/* Email */}
//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={userInfo.email}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                     {/* Phone */}
//                     <div>
//                         <label>Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={userInfo.phone}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                     </div>
//                     {/* Address */}
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={userInfo.address}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//                     </div>
//                 </div>

//                 <div className="mt-4 flex justify-center space-x-4">
//                     {isEditMode ? (
//                         <>
//                             <button
//                                 onClick={clearInfo}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Delete Profile
//                             </button>
//                             <button
//                                 onClick={handleSubmit}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Save Info
//                             </button>
//                         </>
//                     ) : (
//                         <button
//                             onClick={handleEditProfile}
//                             className="p-2 text-xl font-bold text-white bg-black cursor-pointer rounded"
//                         >
//                             Edit Profile
//                         </button>
//                     )}
//                 </div>

//                 {/* Popup Notification */}
//                 {showPopup && (
//                     <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                         {isEditMode ? "Your profile will be submitted." : "Your profile will be deleted."}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default UserProfile;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

// function UserProfile() {
//     const [userInfo, setUserInfo] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         phone: '',
//         address: '',
//         image: null,
//     });

//     const [showPopup, setShowPopup] = useState(false);
//     const [showDeletePopup, setShowDeletePopup] = useState(false);
//     const [isEditMode, setIsEditMode] = useState(true);
//     const [errors, setErrors] = useState({});

//     // Fetch user data when the component mounts
//     useEffect(() => {
//         const fetchUserData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/user', {
//                     params: { email: userInfo.email }
//                 });
//                 setUserInfo(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchUserData();
//     }, []);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         });
//     };

//     const handleFileChange = (e) => {
//         setUserInfo({
//             ...userInfo,
//             image: e.target.files[0],
//         });
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!userInfo.name) newErrors.name = "Name is required";
//         if (!userInfo.surname) newErrors.surname = "Surname is required";
//         if (!userInfo.email) newErrors.email = "Email is required";
//         if (!userInfo.phone) newErrors.phone = "Phone is required";
//         if (!userInfo.address) newErrors.address = "Address is required";
//         return newErrors;
//     };

//     const handleSubmit = async () => {
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         setShowPopup(true);

//         const formData = new FormData();
//         formData.append('name', userInfo.name);
//         formData.append('surname', userInfo.surname);
//         formData.append('email', userInfo.email);
//         formData.append('phone', userInfo.phone);
//         formData.append('address', userInfo.address);

//         if (userInfo.image) {
//             formData.append('image', userInfo.image);
//         }

//         try {
//             await axios.post('http://localhost:4000/api/upload', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             setIsEditMode(false);
//             setErrors({});

//             // Hide popup after 2-3 seconds
//             setTimeout(() => {
//                 setShowPopup(false);
//                 setIsEditMode(false);
//             }, 3000);
//         } catch (error) {
//             console.error('Error updating profile:', error.message || error);
//         }
//     };

//     const clearInfo = () => {
//         setUserInfo({
//             name: '',
//             surname: '',
//             email: '',
//             phone: '',
//             address: '',
//             image: null,
//         });
//         setErrors({});
//         setShowDeletePopup(true);

//         // Hide delete popup after 2-3 seconds
//         setTimeout(() => {
//             setShowDeletePopup(false);
//         }, 3000);
//     };

//     const handleEditProfile = () => {
//         setIsEditMode(true);
//     };

//     return (
//         <div className="flex w-full h-screen">
//             {/* Left Column (25%) */}
//             <div className="w-1/4 bg-gray-500 p-6 text-center text-white">
//                 <img 
//                     src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
//                     alt="Profile" 
//                     className="rounded-full mx-auto w-32 h-32"
//                 />
//                 <input
//                     type="file"
//                     onChange={handleFileChange}
//                     className="mt-4"
//                     disabled={!isEditMode}
//                 />
//                 <h2 className="mt-4 text-xl font-semibold">
//                     {userInfo.name || "User"} {userInfo.surname || "Name"}
//                 </h2>
//                 <p>{userInfo.email || "user@example.com"}</p>
//             </div>

//             {/* Right Column (75%) */}
//             <div className="w-3/4 p-6">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Profile Settings</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     {/* Name */}
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={userInfo.name}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                     </div>
//                     {/* Surname */}
//                     <div>
//                         <label>Surname</label>
//                         <input
//                             type="text"
//                             name="surname"
//                             value={userInfo.surname}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
//                     </div>
//                     {/* Email */}
//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={userInfo.email}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                     {/* Phone */}
//                     <div>
//                         <label>Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={userInfo.phone}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                     </div>
//                     {/* Address */}
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={userInfo.address}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode}
//                         />
//                         {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//                     </div>
//                 </div>

//                 <div className="mt-4 flex justify-center space-x-4">
//                     {isEditMode ? (
//                         <>
//                             <button
//                                 onClick={clearInfo}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Delete Profile
//                             </button>
//                             <button
//                                 onClick={handleSubmit}
//                                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//                             >
//                                 Save Info
//                             </button>
//                         </>
//                     ) : (
//                         <button
//                             onClick={handleEditProfile}
//                             className="p-2 text-xl font-bold text-white bg-black cursor-pointer rounded"
//                         >
//                             Edit Profile
//                         </button>
//                     )}
//                 </div>

//                 {/* Popup Notification */}
//                 {showPopup && (
//                     <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                         Your profile will be submitted.
//                     </div>
//                 )}

//                 {/* Delete Confirmation Popup */}
//                 {showDeletePopup && (
//                     <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
//                         Your profile will be deleted.
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default UserProfile;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

function UserProfile() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        image: null,
    });

    const [showPopup, setShowPopup] = useState(false);
    const [showDeletePopup, setShowDeletePopup] = useState(false); // New state for delete confirmation
    const [isEditMode, setIsEditMode] = useState(true);
    const [errors, setErrors] = useState({});

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/user', {
                    params: { email: userInfo.email }
                });
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setUserInfo({
            ...userInfo,
            image: e.target.files[0],
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!userInfo.name) newErrors.name = "Name is required";
        if (!userInfo.surname) newErrors.surname = "Surname is required";
        if (!userInfo.email) newErrors.email = "Email is required";
        if (!userInfo.phone) newErrors.phone = "Phone is required";
        if (!userInfo.address) newErrors.address = "Address is required";
        return newErrors;
    };

    const handleSubmit = async () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setShowPopup(true); // Show popup immediately

        const formData = new FormData();
        formData.append('name', userInfo.name);
        formData.append('surname', userInfo.surname);
        formData.append('email', userInfo.email);
        formData.append('phone', userInfo.phone);
        formData.append('address', userInfo.address);

        if (userInfo.image) {
            formData.append('image', userInfo.image);
        }

        try {
            await axios.post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setIsEditMode(false);
            setErrors({});

            // Hide the popup after 2-3 seconds and switch buttons
            setTimeout(() => {
                setShowPopup(false);
            }, 2000); // Adjust timing as necessary
        } catch (error) {
            console.error('Error updating profile:', error.message || error);
        }
    };

    const clearInfo = () => {
        setUserInfo({
            name: '',
            surname: '',
            email: '',
            phone: '',
            address: '',
            image: null,
        });
        setErrors({});
        setShowDeletePopup(true); // Show delete confirmation message
    };

    const handleEditProfile = () => {
        setIsEditMode(true);
    };

    return (
        <div className="flex w-full h-screen">
            {/* Left Column (25%) */}
            <div className="w-1/4 bg-gray-500 p-6 text-center text-white">
                <img 
                    src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
                    alt="Profile" 
                    className="rounded-full mx-auto w-32 h-32"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-4"
                    disabled={!isEditMode}
                />
                <h2 className="mt-4 text-xl font-semibold">
                    {userInfo.name || "User"} {userInfo.surname || "Name"}
                </h2>
                <p>{userInfo.email || "user@example.com"}</p>
            </div>

            {/* Right Column (75%) */}
            <div className="w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Profile Settings</h2>
                <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                            disabled={!isEditMode}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    {/* Surname */}
                    <div>
                        <label>Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={userInfo.surname}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
                            disabled={!isEditMode}
                        />
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                    </div>
                    {/* Email */}
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                            disabled={!isEditMode}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    {/* Phone */}
                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                            disabled={!isEditMode}
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    {/* Address */}
                    <div>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
                            disabled={!isEditMode}
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                    {isEditMode ? (
                        <>
                            <button
                                onClick={clearInfo}
                                className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                Delete Profile
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                Save Info
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleEditProfile}
                            className="p-2 text-xl font-bold text-white bg-black cursor-pointer rounded"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                {/* Popup Notification */}
                {showPopup && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        Your profile will be submitted.
                    </div>
                )}

                {/* Delete Confirmation Popup */}
                {showDeletePopup && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        Your profile will be deleted.
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
