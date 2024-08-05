import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
 
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate('/signup');
  };


  return (
    <>
    
       <div className='m-4 ' onClick={handlelogin}>
        <AccountCircleIcon fontSize='large' className='cursor-pointer hover:text-blue-400'  />
      </div>
             
     
    </>
  );
};
