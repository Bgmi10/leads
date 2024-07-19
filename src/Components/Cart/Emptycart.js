import React from 'react'
import { LottieAnimation } from '../Lottieanimation'
import * as cartgifjson from './empty cart.json'

export const Emptycart = ({items}) => {
  return (
    <>
    <div className=' mt-3 justify-center flex'>
  <button  disabled={true}>
     <LottieAnimation gif={cartgifjson} height={250} width={250}/>
  </button>
  
  </div>
  <div className='text-center mt-3'>
  <span className='font-normal text-lg'>Your cart is empty <span className='text-red-500 '>({items.length})</span></span>
  </div>
  <div className='justify-center flex '>
    <button className='p-2 rounded-md bg-black text-white hover:scale-105 w-52 mt-3' onClick={() => window.location.href = "/"}>Explore Items</button>
  </div>
  </>
  )
}
