import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { baseurl, token } from '../../utils/constants'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Validateform } from '../../utils/Validateform';

export const Signuppage = () => {

  const [issingupform , setIssignupform ] = useState(true)
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()

  const {Email , Password  , Name} = Validateform(email , password , name)
  
  console.log(Email)
    const handlesbmit =  (e) => {
      e.preventDefault()
      if(!Email){
        toast.error('check the email field')
      }
      if(!Password){
        toast.error('* password must be contain atleast one uppercase \n * password must be contain one lowercase \n * password must be contain one numerical value \n * password must be contain atleast one Special characters')
      }
    
      if(!Name){
        toast.error('* Name is required field \n * Name characters should be atleast > 3 ')
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
    
       const register = async () => { 
        try{
          
            const res = await fetch(issingupform ? baseurl + '/api/auth/local/register'  : baseurl + '/api/auth/local/',{
                method : "POST",
                headers : {
                       
                        'Content-Type': 'application/json',
                },
                body : JSON.stringify(issingupform ? signup_Form_data : login_form_data )
            })
               
            if(res.ok){
             const data = await res.json()
             toast.success('Account created successfully' , data)
             console.log(data.jwt)
             navigate('/')
             sessionStorage.setItem('usertoken' , data.jwt)
            }
            else{
              const errdata = await res.json()
              toast.error(errdata.error.message)
              console.log(errdata)
            }
        }
        catch (err) { 
            console.log(err)
        }
    }
    register()
    
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
          <TextField id="outlined-basic" label="password" variant="outlined"  type="password" className='w-full' onChange={e => setPassword(e.target.value)} required/>
          
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
