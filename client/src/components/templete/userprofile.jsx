
// import React, { useState } from 'react';
// import axios from 'axios';
// import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

// function UserProfile() {
//     const [userInfo, setUserInfo] = useState({
//         name: '',
//         surname: '',
//         email: '',
//         phone: '',
//         address: '', // Added address field
//         image: null, // For image upload
//     });

//     const [showPopup, setShowPopup] = useState(false); // For showing the pop-up
//     const [isEditMode, setIsEditMode] = useState(true); // To toggle between Save and Edit mode
//     const [errors, setErrors] = useState({}); // To handle validation errors

//     // Handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setUserInfo({
//             ...userInfo,
//             [name]: value,
//         });
//     };

//     // Handle file change
//     const handleFileChange = (e) => {
//         setUserInfo({
//             ...userInfo,
//             image: e.target.files[0],
//         });
//     };

//     // Validate required fields
//     const validateForm = () => {
//         const newErrors = {};
//         if (!userInfo.name) newErrors.name = "Name is required";
//         if (!userInfo.surname) newErrors.surname = "Surname is required";
//         if (!userInfo.email) newErrors.email = "Email is required";
//         if (!userInfo.phone) newErrors.phone = "Phone is required";
//         if (!userInfo.address) newErrors.address = "Address is required";
//         return newErrors;
//     };

//     // Handle form submission
//     const handleSubmit = () => {
//         const formErrors = validateForm();
//         if (Object.keys(formErrors).length > 0) {
//             setErrors(formErrors);
//             return;
//         }

//         const formData = new FormData();
//         for (const key in userInfo) {
//             formData.append(key, userInfo[key]);
//         }

//         axios.post('http://localhost:4000/api/upload', formData)
//             .then((res) => {
//                 console.log('Profile updated successfully:', res.data);
//                 // Show popup, toggle mode to Edit and remove delete button
//                 setShowPopup(true);
//                 setIsEditMode(false);
//                 setErrors({});
//             })
//             .catch((err) => {
//                 console.error('Error updating profile:', err.message || err);
//             });
//     };

//     // Clear all input fields
//     const clearInfo = () => {
//         setUserInfo({
//             name: '',
//             surname: '',
//             email: '',
//             phone: '',
//             address: '', // Clear address field
//             image: null,
//         });
//         setErrors({});
//     };

//     // Handle Edit Profile mode
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
//                     disabled={!isEditMode} // Disable file input in view mode
//                 />
//                 <h2 className="mt-4 text-xl font-semibold">
//                     {userInfo.name || "User"} {userInfo.surname || "Name"}
//                 </h2>
//                 <p>{userInfo.email || "user@example.com"}</p>
//             </div>

//             {/* Right Column (75%) */}
//             <div className="w-3/4 p-6">
//                 <h2 className="text-2xl font-bold mb-4 text-center ">Profile Settings</h2>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label>Name</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={userInfo.name}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode} // Disable input in view mode
//                         />
//                         {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//                     </div>
//                     <div>
//                         <label>Surname</label>
//                         <input
//                             type="text"
//                             name="surname"
//                             value={userInfo.surname}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode} // Disable input in view mode
//                         />
//                         {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
//                     </div>
//                     <div>
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={userInfo.email}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode} // Disable input in view mode
//                         />
//                         {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//                     </div>
//                     <div>
//                         <label>Phone</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={userInfo.phone}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode} // Disable input in view mode
//                         />
//                         {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//                     </div>
//                     <div>
//                         <label>Address</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={userInfo.address}
//                             onChange={handleInputChange}
//                             className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
//                             disabled={!isEditMode} // Disable input in view mode
//                         />
//                         {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//                     </div>
//                 </div>

//                 <div className="mt-4 flex justify-center space-x-4">
//     {isEditMode ? (
//         <>
//             <button
//                 onClick={clearInfo}
//                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//             >
//                 Delete Profile
//             </button>
//             <button
//                 onClick={handleSubmit}
//                 className="p-2 text-xl font-bold text-white bg-black cursor-pointer"
//             >
//                 Save Info
//             </button>
//         </>
//     ) : (
//         <button
//             onClick={handleEditProfile}
//             className="p-2 text-xl font-bold text-white bg-black cursor-pointer rounded"
//         >
//             Edit Profile
//         </button>
//     )}
// </div>


//                 {/* Popup Notification */}
//                 {showPopup && (
//                     <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
//                         Your profile has been submitted successfully.
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
    const [isEditMode, setIsEditMode] = useState(true);
    const [errors, setErrors] = useState({});
    const [submitTimestamp, setSubmitTimestamp] = useState(null);
    const [deletionMessage, setDeletionMessage] = useState('');

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

        const currentTimestamp = new Date().toISOString();
        setSubmitTimestamp(currentTimestamp);

        const formData = new FormData();
        formData.append('name', userInfo.name);
        formData.append('surname', userInfo.surname);
        formData.append('email', userInfo.email);
        formData.append('phone', userInfo.phone);
        formData.append('address', userInfo.address);
        formData.append('timestamp', currentTimestamp);

        if (userInfo.image) {
            formData.append('image', userInfo.image);
        }

        try {
            await axios.post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setShowPopup(true);
            setIsEditMode(false);
            setErrors({});

            setTimeout(() => {
                setShowPopup(false);
            }, 5000);
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
        setDeletionMessage('Your profile has been deleted.');
        setShowPopup(false);
    };

    const handleEditProfile = () => {
        setIsEditMode(true);
        setDeletionMessage('');
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
            {/* Left Column */}
            <div className="w-full md:w-1/4 bg-gray-500 p-4 md:p-6 text-center text-white">
                <img 
                    src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
                    alt="Profile" 
                    className="rounded-full mx-auto w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-4"
                    disabled={!isEditMode}
                />
                <h2 className="mt-4 text-lg sm:text-xl font-semibold">
                    {userInfo.name || "User"} {userInfo.surname || "Name"}
                </h2>
                <p className="text-sm sm:text-base">{userInfo.email || "user@example.com"}</p>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-3/4 p-4 md:p-6">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Profile Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div className="mt-4 flex justify-center space-x-2 sm:space-x-4">
                    {isEditMode ? (
                        <>
                            <button
                                onClick={clearInfo}
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                Delete Profile
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                            >
                                Save Info
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleEditProfile}
                            className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer rounded"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                {/* Popup Notification */}
                {showPopup && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                        Your profile has been submitted successfully.
                    </div>
                )}

                {/* Deletion Notification */}
                {deletionMessage && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {deletionMessage}
                    </div>
                )}
            </div>

            {/* Media query for screens as small as 200px */}
            <style jsx>{`
                @media (max-width: 200px) {
                    .p-4 {
                        padding: 2px;
                    }
                    .p-2 {
                        padding: 1px;
                    }
                    .text-xl {
                        font-size: 1rem;
                    }
                    .text-lg {
                        font-size: 0.875rem;
                    }
                    .text-sm {
                        font-size: 0.75rem;
                    }
                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            `}</style>
        </div>
    );
}

export default UserProfile;



