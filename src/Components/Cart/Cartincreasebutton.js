import React from 'react'


export const Cartincreasebutton = ({handleIncrease , i , cartItem , Fab}) => {
  return (
   <>
     <button className='font-normal text-2xl cursor-pointer'  onClick={() => handleIncrease(i?.id , cartItem , i)}>
        <Fab variant="extended" size="small" color="default">+</Fab>
     </button>
   </>
  )
}
