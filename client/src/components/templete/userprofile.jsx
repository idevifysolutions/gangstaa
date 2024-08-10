import React from 'react';

function UserProfile() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="lg:col-span-1 border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value="John Doe"
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value="johndoe@example.com"
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Phone</label>
            <input
              type="text"
              value="+1 123 456 7890"
              className="w-full px-4 py-2 border rounded-md"
              readOnly
            />
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Edit Profile
          </button>
        </div>

        {/* Order History */}
        <div className="lg:col-span-2 border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 border">Order ID</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Status</th>
                  <th className="px-4 py-2 border">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">#12345</td>
                  <td className="px-4 py-2 border">2024-08-01</td>
                  <td className="px-4 py-2 border">Shipped</td>
                  <td className="px-4 py-2 border">INR 1599</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">#12346</td>
                  <td className="px-4 py-2 border">2024-07-21</td>
                  <td className="px-4 py-2 border">Delivered</td>
                  <td className="px-4 py-2 border">INR 999</td>
                </tr>
                {/* Add more orders as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Address Book */}
      <div className="border p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-2xl font-bold mb-4">Address Book</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Address 1</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            rows="3"
            readOnly
          >
            1234 Main St, Apt 101, Springfield, IL 62704, USA
          </textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Address 2</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            rows="3"
            readOnly
          >
            5678 Market St, Apt 202, Springfield, IL 62705, USA
          </textarea>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
          Edit Addresses
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
