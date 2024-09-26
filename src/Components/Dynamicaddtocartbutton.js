import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export const Dynamicaddtocartbutton = ( {item , isItemInCart , handleclick}) => {
  return (
   <>
    
       
     {isItemInCart(item?.id) ? (
                <Link to={'/mycart'}>
                  <button className='bg-black text-white rounded-md fixed  p-2 w-full hover:scale-95  transition duration-300 offer-shimmer' style={{backgroundColor: "black"}}><ShoppingCartCheckoutIcon /> Checkout</button>
                </Link>
              ) : (
                <button className='bg-blue-400 text-white rounded-md p-2 w-full hover:scale-95  hover:bg-blue-500 transition duration-300' onClick={() => handleclick(item)}><ShoppingCartIcon /> Add to cart</button>
              )}

   </>
  )
}
