
import React, { useState } from 'react';
import axios from 'axios';
import defaultImage from "../../data/image.jpeg"; // Adjust the path as necessary

function UserProfile() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '', // Added address field
        image: null, // For image upload
    });

    const [showPopup, setShowPopup] = useState(false); // For showing the pop-up
    const [isEditMode, setIsEditMode] = useState(true); // To toggle between Save and Edit mode
    const [errors, setErrors] = useState({}); // To handle validation errors

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    // Handle file change
    const handleFileChange = (e) => {
        setUserInfo({
            ...userInfo,
            image: e.target.files[0],
        });
    };

    // Validate required fields
    const validateForm = () => {
        const newErrors = {};
        if (!userInfo.name) newErrors.name = "Name is required";
        if (!userInfo.surname) newErrors.surname = "Surname is required";
        if (!userInfo.email) newErrors.email = "Email is required";
        if (!userInfo.phone) newErrors.phone = "Phone is required";
        if (!userInfo.address) newErrors.address = "Address is required";
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        const formData = new FormData();
        for (const key in userInfo) {
            formData.append(key, userInfo[key]);
        }

        axios.post('http://localhost:4000/api/upload', formData)
            .then((res) => {
                console.log('Profile updated successfully:', res.data);
                // Show popup, toggle mode to Edit and remove delete button
                setShowPopup(true);
                setIsEditMode(false);
                setErrors({});
            })
            .catch((err) => {
                console.error('Error updating profile:', err.message || err);
            });
    };

    // Clear all input fields
    const clearInfo = () => {
        setUserInfo({
            name: '',
            surname: '',
            email: '',
            phone: '',
            address: '', // Clear address field
            image: null,
        });
        setErrors({});
    };

    // Handle Edit Profile mode
    const handleEditProfile = () => {
        setIsEditMode(true);
    };

    return (
        <div className="flex w-full h-screen">
            {/* Left Column (25%) */}
            <div className="w-1/4 bg-gray-800 p-6 text-center text-white">
                <img 
                    src={userInfo.image ? URL.createObjectURL(userInfo.image) : defaultImage} 
                    alt="Profile" 
                    className="rounded-full mx-auto w-32 h-32"
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    className="mt-4"
                    disabled={!isEditMode} // Disable file input in view mode
                />
                <h2 className="mt-4 text-xl font-semibold">
                    {userInfo.name || "User"} {userInfo.surname || "Name"}
                </h2>
                <p>{userInfo.email || "user@example.com"}</p>
            </div>

            {/* Right Column (75%) */}
            <div className="w-3/4 p-6">
                <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                            disabled={!isEditMode} // Disable input in view mode
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>
                    <div>
                        <label>Surname</label>
                        <input
                            type="text"
                            name="surname"
                            value={userInfo.surname}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.surname ? 'border-red-500' : ''}`}
                            disabled={!isEditMode} // Disable input in view mode
                        />
                        {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                            disabled={!isEditMode} // Disable input in view mode
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div>
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={userInfo.phone}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.phone ? 'border-red-500' : ''}`}
                            disabled={!isEditMode} // Disable input in view mode
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                    <div>
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={handleInputChange}
                            className={`border p-2 w-full ${errors.address ? 'border-red-500' : ''}`}
                            disabled={!isEditMode} // Disable input in view mode
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </div>
                </div>

                <div className="mt-4">
                    {isEditMode ? (
                        <>
                            <button
                                onClick={clearInfo}
                                className="bg-red-500 text-white px-4 py-2 rounded mr-4"
                            >
                                Delete Info
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white px-4 py-2 rounded"
                            >
                                Save Info
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleEditProfile}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
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
            </div>
        </div>
    );
}

export default UserProfile;


