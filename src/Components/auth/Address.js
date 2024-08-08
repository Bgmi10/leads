import React, { useState } from 'react';
import { faBars, faClose, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validateaddresss } from '../../utils/validateaddress';
import { toast } from 'react-toastify';
import { Addressform } from './Addressform';
import { baseurl, token } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { Fetchaddress } from './Fetchaddress';

export const Address = () => {

  const [Name , setName] = useState('')
  const [number , setNumber] = useState('')
  const [address , setAddress] = useState('')
  const [pincode , setPincode ] = useState('')
  const [locality , setLocality ] = useState('')
  const [city , setCity] = useState('')
  const [state , setState ] = useState('')
  const userid = useSelector(store => store.auth.user.id)
  const {Number , Pincode  } = validateaddresss(number , pincode  )
  const [isopen , setIsopen] = useState(false)

  const handleformsubmit = () => { 
      
    if(!Number){
      toast.error('please provide the valid mobile number ')
      return
    }

    if(address === ''){
      toast.error('Address is a required field')
      return 
    }
    
    if(locality === ''){
      toast.error('locality is a required field')
      return
    }
    if(city === ''){
      toast.error('city is a required field')
      return
    }

    if(state === ''){
      toast.error('district is a required field')
      return
    }
    if(!Pincode){
      toast.error('Pincode is not valid ')
      return

    }
   postaddress()

  }

  async function postaddress () {
    try{
      const res = await fetch( baseurl +  `/api/addresses` , {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${token}`
        },
        body : JSON.stringify({
          data: {
          userid : userid,
          name : Name ,
          mobilenumber : number ,
          address : address ,
          pincode : pincode , 
          locality : locality ,
          city : city,
          state : state
        }, user : userid
        })

      })

      if(res.ok){
         toast.success('address added successfully')
         setIsopen(false)
      }
    }
    catch (err) {
      console.log(err)
    }

  }
   
  return (
    <>
     
     <div className='bg-white  m-7 rounded-lg  shadow-lg p-6  mx-4 '>
      
      <button className='bg-blue-500 p-2 m-2 hover:bg-blue-600 text-white  ' onClick={() => setIsopen(true)}>Add new address</button>
         
        <Fetchaddress />
     </div>
     
      {isopen &&
      <div className="fixed inset-0 flex items-center justify-center z-50">  
       <div className="bg-black opacity-65 w-full h-full absolute"></div>
       
       <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto z-10">
        <div className='flex justify-end m-1 '>        
           <FontAwesomeIcon icon={faClose} className='text-xl cursor-pointer' onClick={() => setIsopen(false)} />
        </div>

      <Addressform  setAddress={setAddress} setCity={setCity} setLocality={setLocality} setName={setName}  handleformsubmit={handleformsubmit} Name={Name} setState={setState} setPincode={setPincode}  setNumber={setNumber}/>
      </div>
      </div>}
      </>
  );
}
