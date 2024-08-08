import React from 'react';

export const Confirmindicator = ({ deletecaption, confirmdelete, cancel  , message}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-75 w-full h-full absolute"></div>
      <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto z-10">
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Are you sure?</h2>
          <p className="text-gray-600 mt-2">Do you really want to  {message} This process cannot be undone.</p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => confirmdelete(false)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg"
          >
            {cancel || 'Cancel'}
          </button>
          <button
            onClick={() => confirmdelete(true)}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
          >
            {deletecaption || 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};
