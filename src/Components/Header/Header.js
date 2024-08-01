import React from 'react'
import { Cart } from '../Cart/Cart'
import { Searchbar } from '../Searchbar/Searchbar'
import { Login } from '../auth/Login'
import { Headeritems } from './Headeritems'
import { header_logo } from '../../utils/constants'
import { Mobilenavbar } from './Mobilenavbar'

export const Header = () => {
  return (
    <div className='border shadow-md h-[74px] justify-between flex '>
      <div className='ml-2'>
        <img src={header_logo}  className='w-10 ml-5 mt-2 h-auto rounded-md  '/>
        <span className='font-serif ml-5'>Leads</span>
        </div>
        
        <div className='flex justify-end mr-3 '>
        <Headeritems />
        <Searchbar />
        <Cart />
        <Login />
      
        <Mobilenavbar />
        
        </div>
    </div>
  )
}
