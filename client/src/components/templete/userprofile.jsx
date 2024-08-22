



import React, { useState, useEffect } from 'react';
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
    const [showDeletePopup, setShowDeletePopup] = useState(false); 
    const [isEditMode, setIsEditMode] = useState(true);
    const [errors, setErrors] = useState({});
    const [deletionMessage, setDeletionMessage] = useState('');

    const handleSubmit = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setShowPopup(true); // Show popup immediately

        // Save updated user data in local storage
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsEditMode(false);
        setErrors({});

        // Hide the popup after 2 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    useEffect(() => {
        // Check if user data exists in localStorage
        const storedUserInfo = localStorage.getItem('userInfo');
        if (storedUserInfo) {
            setUserInfo(JSON.parse(storedUserInfo));
        }
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
        setShowPopup(false); // Hide save info popup when delete button is clicked
        setShowDeletePopup(true); // Show delete confirmation message

        // Clear local storage
        localStorage.removeItem('userInfo');

        setDeletionMessage('Your profile has been deleted.');

        // Hide the delete confirmation popup after 2 seconds
        setTimeout(() => {
            setShowDeletePopup(false);
        }, 2000);
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

                <div className="flex justify-center mt-6 space-x-4">
                    {isEditMode ? (
                        <>
                            <button
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                                onClick={handleSubmit}
                            >
                                Save Info
                            </button>
                            <button
                                className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                                onClick={clearInfo}
                            >
                                Delete Info
                            </button>
                        </>
                    ) : (
                        <button
                            className="p-2 text-sm sm:text-xl font-bold text-white bg-black cursor-pointer"
                            onClick={handleEditProfile}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>

                {showPopup && (
                    <div className="fixed bottom-10 right-10 bg-blue-500 text-white p-4 rounded">
                        Profile saved successfully!
                    </div>
                )}
                {showDeletePopup && deletionMessage && (
                    <div className="fixed bottom-10 right-10 bg-red-500 text-white p-4 rounded">
                        {deletionMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
