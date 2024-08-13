import React, { useState } from "react";

function UserProfile() {
  const [image, setImage] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditingProfile(false);
    setIsEditingAddresses(false);
    // Add logic to save the edited information here
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* User Info */}
      <div className="p-4 mb-6 border rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center">
          User Information
        </h2>

        {/* User Image */}
        <div className="mb-4 text-center">
          {image ? (
            <img
              src={image}
              alt="User"
              className="object-cover w-32 h-32 mx-auto mb-4 border"
            />
          ) : (
            <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 text-gray-500 bg-gray-200 border">
              No Image
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            readOnly={!isEditingProfile}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            readOnly={!isEditingProfile}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Phone</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            readOnly={!isEditingProfile}
          />
        </div>
        <div className="text-center">
          <button
            onClick={() => setIsEditingProfile(!isEditingProfile)}
            className="px-4 py-2 m-2 text-white duration-200 bg-black hover:bg-gray-800 bg-gradient-to-r from-primary to-secondary hover:scale-105"
          >
            {isEditingProfile ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Order History */}
      <div className="p-4 mb-6 border rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Order History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-center border">Order ID</th>
                <th className="px-4 py-2 text-center border">Date</th>
                <th className="px-4 py-2 text-center border">Status</th>
                <th className="px-4 py-2 text-center border">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-center border">#12345</td>
                <td className="px-4 py-2 text-center border">2024-08-01</td>
                <td className="px-4 py-2 text-center border">Shipped</td>
                <td className="px-4 py-2 text-center border">INR 1599</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-center border">#12346</td>
                <td className="px-4 py-2 text-center border">2024-07-21</td>
                <td className="px-4 py-2 text-center border">Delivered</td>
                <td className="px-4 py-2 text-center border">INR 999</td>
              </tr>
              {/* Add more orders as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Address Book */}
      <div className="p-4 border rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Address Book</h2>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Address 1</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            rows="3"
            placeholder="Enter Address 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            readOnly={!isEditingAddresses}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold">Address 2</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            rows="3"
            placeholder="Enter Address 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            readOnly={!isEditingAddresses}
          />
        </div>
        <div className="text-center">
          <button
            onClick={() => setIsEditingAddresses(!isEditingAddresses)}
            className="px-4 py-2 m-2 text-white duration-200 bg-black hover:bg-gray-800 bg-gradient-to-r from-primary to-secondary hover:scale-105"
          >
            {isEditingAddresses ? "Cancel" : "Edit Addresses"}
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button
          onClick={handleSave}
          className="px-4 py-2 m-2 text-white duration-200 bg-black hover:bg-gray-800 bg-gradient-to-r from-primary to-secondary hover:scale-105"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
