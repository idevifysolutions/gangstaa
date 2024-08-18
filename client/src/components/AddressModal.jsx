import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddressModal = ({ handleClose, show, setShow, fetchAddress }) => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/api/address/new`,
        { address, phone },
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      if (data.message) {
        toast.success(data.message);
        fetchAddress();
        setShow(false);
        setAddress("");
        setPhone("");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold text-white mb-4">Add Address</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-white mb-2">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter Address"
              required
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Phone</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone"
              required
              className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-600 text-white font-semibold rounded"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black font-semibold rounded"
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
