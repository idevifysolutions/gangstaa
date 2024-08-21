
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
    const [showDeletePopup, setShowDeletePopup] = useState(false); // State for delete confirmation
    const [isEditMode, setIsEditMode] = useState(true);
    const [errors, setErrors] = useState({});
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
    }, [userInfo.email]);

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
            await axios.post('http://localhost:4000/api/editprofile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setIsEditMode(false);
            setErrors({});
            
            // Hide the popup after 2 seconds
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);

        } catch (error) {
            console.error('Error updating profile:', error.message || error);
        }
    };

    const handleDeleteProfile = async () => {
        try {
            await axios.post('http://localhost:4000/api/deleteprofile', { email: userInfo.email });
            setDeletionMessage('Your profile has been deleted.');

            // Hide the delete confirmation popup after 2 seconds
            setTimeout(() => {
                setShowDeletePopup(false);
            }, 2000);
        } catch (error) {
            console.error('Error deleting profile:', error.message || error);
        }
    };

    const handleClearInfo = () => {
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
        setDeletionMessage('Your profile will be deleted.');
        setShowDeletePopup(true); // Show delete confirmation message
        handleDeleteProfile(); // Call delete profile API
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
                                onClick={handleClearInfo}
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
                        Your profile has been updated successfully.
                    </div>
                )}

                {/* Delete Confirmation Popup */}
                {showDeletePopup && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                        {deletionMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserProfile;
