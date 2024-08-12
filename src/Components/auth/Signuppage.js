import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { baseurl, token } from '../../utils/constants'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify';
import { Validateform } from '../../utils/Validateform';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export const Signuppage = () => {

  const [issingupform , setIssignupform ] = useState(true)
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [showpassword , setShowpassword] = useState(false)
  const {Email , Password  , Name} = Validateform(email , password , name.trim(''))
 

 
    const handlesbmit =  (e) => {
      e.preventDefault()
      if(!Email){
        toast.error('Please enter a valid email.')
      }
      if(!Password){
        toast.error('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.')
      }
    
      if(issingupform && !Name ){
        toast.error('Name is a required field and should be at least 3 characters long.')
      }
      const signup_Form_data = {
        username : name,
        email  : email,
        password : password
    
      }

      const login_form_data = {
        identifier : email,
        password : password
      }
    
    if (Email && Password && (issingupform ? Name : Email)){
      dynamicformsubmission()
    }  
      
    
     
      async function dynamicformsubmission() { 
        try{
          
            const res = await fetch(issingupform ? baseurl + '/api/auth/local/register'  : baseurl + '/api/auth/local/',{
                method : "POST",
                headers : {
                        'Authorization' : `Bearer ${token} ` ,
                        'Content-Type': 'application/json',
                },
                body : JSON.stringify(issingupform ? signup_Form_data : login_form_data )
            })
               
            if(res.ok){
             const data = await res.json()
             toast.success( issingupform ? 'Account created successfully' : 'Logged successfully' )
             window.location.href = '/'
             sessionStorage.setItem('usertoken' , data.jwt)
             
             localStorage.setItem('user' , JSON.stringify(data.user))
            }
            else{
              const errdata = await res.json()
              toast.error(errdata.error.message)
             
            }
        }
        catch (err) { 
            console.log(err)
        }
    }
 
    
    }

         const  handleformchange = () => {
           setIssignupform(prev => !prev)
         }
  
  return (
   <>
   <div className=' flex  items-center justify-center '>
      <div className=' p-3 m-7  border-none outline-none w-72 shadow-md rounded-lg'>
        <div className='justify-center flex  m-4 font-semibold text-slate-800 text-2xl'>
           <span>{issingupform ? 'Sign up ' : 'Login'}</span>
        </div>
       {issingupform && <div className='justify-center flex  m-3'>
          <TextField id="outlined-basic" label="name" variant="outlined" className='w-full' onChange={e => setName(e.target.value)} required/>
          
          </div>}
          <div className='justify-center flex  m-3'>
          <TextField id="outlined-basic" label="email" variant="outlined" className='w-full'onChange={e => setEmail(e.target.value)}  required/>
          
          </div>
          <div className='justify-center flex  m-3'>
          <TextField id="outlined-basic" label="password" variant="outlined"  type={!showpassword && 'password' } className='w-full' onChange={e => setPassword(e.target.value)} required />
          <FontAwesomeIcon icon={ showpassword ?  faEye : faEyeSlash}  className='py-4 ml-[200px] text-lg cursor-pointer  absolute ' onClick={() => setShowpassword(prev => !prev)}/>
          
          </div>
          <div className='text-center  m-3 font-normal text-sm  text-gray-500'>
          <span >{issingupform ? 'Already haven account ?' : 'New to Leads ?  '} <span className='cursor-pointer hover:text-gray-700 underline m-1 text-blue-500' onClick={handleformchange}>{issingupform ? "Log in" : "Sign up"}</span> </span>
          </div>
      <div className='justify-center flex '>
        <Button variant="contained" size='large' className='w-64  ' color='primary'  onClick={handlesbmit}>{issingupform ? 'Signup' : 'Log in ' } </Button>
      </div>
   </div>
   </div> 
   </>
  )
}


