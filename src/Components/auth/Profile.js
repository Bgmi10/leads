import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { baseurl, token } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Confirmindicator } from './Confirmindicator';
import { Nameedit } from './Nameedit';

export const Profile = () => {

    const user = useSelector(store => store.auth.user)

    const username = user?.username
    const [profileinfo , setProfileinfo] = useState(false)
    const dispatch = useDispatch()
    const [confirmdelete , setConfirmdelete] = useState(false)

    const handleprofileinfo = ()=> {
        setProfileinfo(true)
    }

    const handlelogout = ()  => {
        dispatch(logout())
        window.location.href = '/'

    }


    const handledeleteaccount = ( ) => {

        const deleteuser = async( ) => {

            const id = user?.id
            try {
               const data = await fetch( baseurl + `/api/users/${id}` , {
                method : "DELETE",
                headers : {
                     'Content-Type' : 'application/json' ,
                     'Authorization' : `Bearer ${token}`
                }
               })

               const res = await data.json()
               if(data.ok){
                dispatch(logout())
                window.location.pathname = '/signup'
                toast.error('Account deleted successfully ')
               }
            }

            catch (err) {
                console.log(err)
            }
        } 
        
      
        deleteuser()
    }
  return (

   
    <>
     <div className='lg:flex '>
        <div>
      <div className="lg:ml-20  mt-10 border lg:w-72 flex h-20 items-center p-4  shadow-md bg-white">
         <img
           src="https://img.freepik.com/premium-vector/round-man-character-mockup-icon-flat-color-round-man-icon-blue-jacket-brown-hair-character-template-vector-icon_774778-2423.jpg?ga=GA1.1.1168591914.1718009553&semt=ais_hybrid"
           className="h-20 w-20 rounded-full"
           alt="User Avatar"
         />
       <div className="ml-4">
         <span className="text-gray-700 font-semibold">Hello,</span>
         <span className="ml-2 text-blue-500 font-medium">{username}</span>
       </div>
    </div>
    <div className="lg:ml-20 sm: ml-4 mt-3 border lg:w-72  h-64  p-4  shadow-md bg-white">
        <div className='border-b mb-3'>
            <span className='text-xl font-normal  '><SettingsIcon  fontSize='large'  color='primary' className=' m-3  '/> Account settings </span>
            
        </div>
        <div className='mt-2'>
                <span className='ml-16 cursor-pointer text-gray-400 hover:text-gray-600 ' onClick={handleprofileinfo}>Profile Information</span>
            </div>
            <div className='mt-2  '>
                <span className='ml-16 cursor-pointer text-gray-400 hover:text-gray-600 '>Manage Address</span>
                <hr className='mt-5'></hr>
            </div>
            <div >
            <button className='text-xl font-normal  ' onClick={handlelogout}><LogoutIcon  fontSize='large'  color='primary' className=' m-3  mt-3 ' /> Logout  </button>
            
        </div>
            
    </div>
    </div>
    {profileinfo && 
            <div className='m-10 border lg:w-full bg-white p-4  shadow-md'>
                   <Nameedit  username={username} user={user} baseurl={baseurl} token={token}/>
                     <div> 
                     <span className='text-red-500 cursor-pointer' onClick={() => 
                     setConfirmdelete(true) } > Delete Account <FontAwesomeIcon icon={faTrash} className='text-red-400' /> </span>
                    
                     </div>
                    {confirmdelete && <Confirmindicator confirmdelete={ (confirm)=> {
                                   {if(confirm){
                                    handledeleteaccount()} setConfirmdelete(false)}
                    } } deletecaption={'Confirm delete'} cancle={'cancle'} message={'Delete Your account'}/> }

                     <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png'  className='mt-24'/>
             </div>
                    }
    </div>
   
    </>
   
  )
       
}
