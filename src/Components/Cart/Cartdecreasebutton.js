import React from 'react'
import RemoveIcon from '@mui/icons-material/Remove';


export const Cartdecreasebutton = ({i , handleDecrease , cartItem , Fab}) => {
  return (
    <>
      <button  className='font-normal text-xl cursor-pointer  border-gray-300 text-gray-400 hover:text-gray-600  rounded-lg p-2 hover:bg-gray-100 transition  border  rounded-r-md flex items-center justify-center'  onClick={() => handleDecrease(i?.id)} disabled= {cartItem?.quantity <= 1}>
        <RemoveIcon />
      </button>
    </>
  )
}
