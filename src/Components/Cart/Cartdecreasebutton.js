import React from 'react'
import Fab from '@mui/material/Fab';

export const Cartdecreasebutton = (i , handleDecrease , cartItem) => {
  return (
    <>
      <button className='font-normal text-xl cursor-pointer'  onClick={() => handleDecrease(i.id)} disabled= {cartItem.quantity <= 1}>
        <Fab variant="extended" size="small" color="default">-</Fab>
      </button>
    </>
  )
}
