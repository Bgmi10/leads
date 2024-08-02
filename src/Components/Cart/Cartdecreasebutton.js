import React from 'react'


export const Cartdecreasebutton = ({i , handleDecrease , cartItem , Fab}) => {
  return (
    <>
      <button className='font-normal text-xl cursor-pointer'  onClick={() => handleDecrease(i?.id)} disabled= {cartItem?.quantity <= 1}>
        <Fab variant="extended" size="small" color="default">-</Fab>
      </button>
    </>
  )
}
