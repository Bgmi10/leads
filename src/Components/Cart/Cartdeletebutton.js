import React from 'react'

export const Cartdeletebutton = ( {handledeleteitem , i} ) => {
  return (
   <>
     <div className='ml-4 mt-1'>
      <button className='p-1 bg-red-500 hover:bg-red-600 outline-none border-none  text-white rounded-md  ' onClick={()=>handledeleteitem(i.id , i.attributes.name)}>Remove</button>
      </div>
   </>
  )
}
