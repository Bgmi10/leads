import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import NavigationIcon from '@mui/icons-material/Navigation';
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
        },3000)
       
      
        return () => clearInterval(i)
         
       
    },[])

   const handlelogin = () => {
    navigate('/login')
   }

   const sm = window.innerWidth < 786 

  return (
    <>
    
    <div className='m-4 '  >
        <AccountCircleIcon fontSize='large' className='cursor-pointer' />
       
    </div>
    
     <div className={ (!vibrate ? 'login-button ' : '' ) + '  mt-[54px] absolute   opacity-80'}>
     { loginstyle &&  !sm && <> <NavigationIcon  fontSize='sm' className='absolute bottom-7 right-6  s'/> <button className=' cursor-pointer  p-1 m-[4px]  bg-black   text-white  font-normal w-14 rounded-  ' onClick={handlelogin}>Login </button></>}
     </div>
     
     </> 
  )
}
