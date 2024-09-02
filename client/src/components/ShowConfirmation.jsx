import React from 'react'

const ShowConfirmation = ({confirm}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Confirm Cash on Delivery</h3>
      <p>Do you want to proceed with Cash on Delivery?</p>
      <div className="mt-4 flex justify-end gap-4">
    
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => {
            confirm(true);
          }}
        >
          Yes
        </button>
        <button
          className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={() => confirm(false)}
        >
          No
        </button>
      </div>
    </div>
  </div>
  )
}

export default ShowConfirmation
