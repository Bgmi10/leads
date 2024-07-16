import React from 'react'
import { Cart } from './Cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Searchbar } from './Searchbar'
import { Login } from './Login'

export const Header = () => {
  return (
    <div className='border shadow-md h-[74px] justify-between flex '>
      <div className='ml-2'>
        <img src='https://media-public.canva.com/MADn33JuIEc/1/thumbnail.png'  className='w-10 ml-5 mt-2 h-auto rounded-md  '/>
        <span className='font-serif m-2'>HORIZON</span>
        </div>
        <div className='flex justify-end mr-3'>
        <Searchbar />
        <Cart />
        <Login />
        </div>
    </div>
  )
}
