import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export const Cartdeletebutton = ( {handledeleteitem , i} ) => {
  return (
   <>
     <div className='ml-2'>
      <button className='text-red-500 hover:text-red-600' onClick={()=>handledeleteitem(i.id , i.attributes.name)}> <DeleteOutlineIcon /></button>
      </div>
   </>
  )
}
