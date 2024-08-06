import React from 'react'
import { useSelector } from 'react-redux'
import { Cartitems } from './Cartitems'
import { Emptycart } from './Emptycart'
import { CartInvoice } from './CartInvoice'

export const Cartdetail = () => {

    const items = useSelector(store => store.cart.items)
    
    const isAuthenticated = useSelector(store => store.auth.user)
 
  
    const Loginbutton = () => {
      return (
        <div className=''>
          <button onClick={() => window.location.href = '/signup'} >Login to View your cart</button>
        </div>
      )
    }
  return (
    <>
    
   {isAuthenticated ?  items.length === 0 ? (
         <Emptycart items={items}/>
    ):(
      <>
      <div className='lg:flex '> 
      <Cartitems items={items} />
      <CartInvoice items={items}/>
      </div>
      </>
       ) : <Loginbutton />}
    
  
    </>
  )
}


export default Cartdetail