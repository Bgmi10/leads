import React from 'react'

export const Editmodel = ( {email , setEmail , handleemail ,setShoweditpanel , editname , placeholder}) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
    
    <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
    
   
    <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-auto z-10 transition-transform transform scale-95">
    
      <h2 className="text-xl font-semibold mb-4">Edit {editname}</h2>
      <input 
        type="text" 
        className="p-2  w-full rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" 
        onChange={e => setEmail(e.target.value)} 
        value={email} 
        placeholder={placeholder}
      />
      <button 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleemail} 
      >
        Save
      </button>
      <button 
        className="mt-4 ml-4  bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => setShoweditpanel(false)} 
      >
        cancel
      </button>
    </div>
  </div>
    </>
  )
}
