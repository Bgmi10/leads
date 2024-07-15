import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {

    const cartcount = useSelector(store => store.cart.items)
    console.log(cartcount)
  return (
    <div className='justify-end flex'>  
        
         <span className='border bg-green-300 rounded-md m-4 p-2  cursor-pointer'>Cart  {cartcount.length}</span></div>
  )
}
