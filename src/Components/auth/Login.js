import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logout } from '../../redux/authSlice';
import { faAngleDown, faAngleUp, faSignOut,  } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export const Login = () => {
  const isAuthenticated = useSelector(store => store.auth.user);
  const dispatch = useDispatch();
  const [ishover , setIshover] = useState(false)
  const handleLogin = () => {
    window.location.href = '/signup'
  };

  const handleLogout = () => {
    dispatch(logout());
   window.location.href = '/'; 
   toast.success('logout sucessfully ')
  };
  

  const handlemouseenter = () => { 
    setIshover(true)

  }

  const handlemouseleave = () =>  {
    setIshover(false)
  }
  return (
    <div className='m-4'>
      {isAuthenticated ? (
        <>
        <div className='flex items-center space-x-2 ' >
          <button
            className='lg:block sm: hidden font-normal text-lg border border-gray-300 bg-white text-gray-700 rounded-md p-1 hover:bg-gray-200 transition duration-300'
            onClick={() => { window.location.href = '/myprofile'; }}
            onMouseEnter={handlemouseenter}
            onMouseLeave={handlemouseleave}
          >
            <AccountCircleIcon fontSize='medium' className='mr-1' />
            {isAuthenticated.username.slice(0, 10)}...
            <FontAwesomeIcon icon={!ishover ? faAngleDown : faAngleUp}  className='text-sm text-slate-400 from-neutral-300 ' />
          </button> 
         
        
        </div>
        {ishover && <div className='bg-white sm: hidden lg:block w- 40 h-40  border icon  z-10 rounded-md ' onMouseEnter={handlemouseenter} onMouseLeave={handlemouseleave}>
            <div className='font-normal m-3 p-1 hover:bg-slate-300  rounded-sm '>
            <span  className='cursor-pointer ' onClick={() => window.location.href = '/myprofile'}> My Profile </span>
            
            </div>
            <div className='font-normal m-3 p-1 hover:bg-slate-300  rounded-sm'>
            <span  className='cursor-pointer ' onClick={() => window.location.href = '/myprofile'}>Profile </span>
            
            </div>
            <div className='font-normal m-3 p-1 hover:bg-slate-300  rounded-sm'>
            <span  className='cursor-pointer ' onClick={handleLogout}><FontAwesomeIcon icon={faSignOut} />Logout </span>
            
            </div>
        </div>}
        </>        
      ) : (
        <button
          onClick={handleLogin}
          className='flex items-center space-x-2 font-normal text-lg border border-gray-300 bg-white text-gray-700 rounded-md p-1 hover:bg-gray-200 transition duration-300'
        >
          <AccountCircleIcon fontSize='large' className='cursor-pointer hover:text-blue-400' />
          <span className='hidden sm:block'>Login</span>
        </button>
      )}
    </div>
  );
};
