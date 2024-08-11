import React, { useState } from 'react';

function UserProfile() {
  const [image, setImage] = useState(null);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingAddresses, setIsEditingAddresses] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');

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
    <div className="container mx-auto py-8 px-4">
      {/* User Info */}
      <div className="border p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4 text-center">User Information</h2>
        
        {/* User Image */}
        <div className="mb-4 text-center">
          {image ? (
            <img
              src={image}
              alt="User"
              className="w-32 h-32 mx-auto rounded-full object-cover border mb-4"
            />
          ) : (
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 border mb-4 flex items-center justify-center text-gray-500">
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
          <label className="block text-sm font-semibold mb-2">Name</label>
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
          <label className="block text-sm font-semibold mb-2">Email</label>
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
          <label className="block text-sm font-semibold mb-2">Phone</label>
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
            className="px-4 py-2 bg-black  m-2 text-white  duration-200  rounded-full hover:bg-gray-800 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105"
           
          >
            {isEditingProfile ? "Cancel" : "Edit Profile"}
          </button>
        </div>
      </div>

      {/* Order History */}
      <div className="border p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border text-center">Order ID</th>
                <th className="px-4 py-2 border text-center">Date</th>
                <th className="px-4 py-2 border text-center">Status</th>
                <th className="px-4 py-2 border text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border text-center">#12345</td>
                <td className="px-4 py-2 border text-center">2024-08-01</td>
                <td className="px-4 py-2 border text-center">Shipped</td>
                <td className="px-4 py-2 border text-center">INR 1599</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border text-center">#12346</td>
                <td className="px-4 py-2 border text-center">2024-07-21</td>
                <td className="px-4 py-2 border text-center">Delivered</td>
                <td className="px-4 py-2 border text-center">INR 999</td>
              </tr>
              {/* Add more orders as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Address Book */}
      <div className="border p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Address Book</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Address 1</label>
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
          <label className="block text-sm font-semibold mb-2">Address 2</label>
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
            className="px-4 py-2 bg-black  m-2 text-white  duration-200  rounded-full hover:bg-gray-800 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105"
          >
            {isEditingAddresses ? "Cancel" : "Edit Addresses"}
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <button 
          onClick={handleSave}
          className="px-4 py-2 bg-black  m-2 text-white  duration-200  rounded-full hover:bg-gray-800 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default UserProfile;

