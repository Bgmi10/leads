import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './login.css'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [loginstyle , setLoginstyle] = useState(false)
    const [vibrate , setVibrate] = useState(false)
    const navigate = useNavigate()
    

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

   const handlelogin = () => {
    navigate('/login')
   }

  return (
    <>
    
    <div className='m-4 '  >
        <AccountCircleIcon fontSize='large'className='cursor-pointer' />
       
    </div>
     <div className={ (!vibrate ? 'login-button' : '' ) + '  mt-[49px] absolute   opacity-80'}>
     { loginstyle && <> <FontAwesomeIcon icon={faAngleUp}  className='absolute bottom-9 left-6 '/> <button className='rounded-md  cursor-pointer  p-2 m-[4px]  bg-black   text-white  ' onClick={handlelogin}>Login </button></>}
     </div>
     </> 
  )
}
