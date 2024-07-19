import React from 'react'
import { useSelector } from 'react-redux'
import { Cartitems } from './Cartitems'
import { Emptycart } from './Emptycart'
import { CartInvoice } from './CartInvoice'

export const Cartdetail = () => {

    const items = useSelector(store => store.cart.items)


  return (
    <>
    
   {items.length === 0 ? (
         <Emptycart items={items}/>
    ):(
      <>
      <div className='lg:flex '> 
      <Cartitems items={items} />
      <CartInvoice items={items}/>
      </div>
      </>
       )}
    
  
    </>
  )
}


export default Cartdetail