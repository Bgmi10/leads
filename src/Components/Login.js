import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './login.css'

export const Login = () => {

    const [loginstyle , setLoginstyle] = useState(false)
    const [vibrate , setVibrate] = useState(false)
   
    

    useEffect(() => {

      const  t = setTimeout(() => {
        setLoginstyle(true)
      }, 4000);


      return () => clearTimeout(t)

    },[])

    useEffect(() =>{

       const i =  setInterval(() => {
           setVibrate(prev => !prev)
        },5000)
       
      
        return () => clearInterval(i)
         
       
    },[])

   

   
  return (
    <>
    <div className='m-4 '>
        <AccountCircleIcon fontSize='large' />
       
    </div>
     <div className={ (!vibrate ? 'login-button' : '' ) + '  mt-16 absolute   opacity-80'}>
     { loginstyle && <> <FontAwesomeIcon icon={faAngleUp}  className='absolute bottom-6 left-6 '/> <span className='rounded-md  cursor-pointer  p-2 m-[4px]  bg-black   text-white  '>Login </span></>}
     </div>
     </> 
  )
}
