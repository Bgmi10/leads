import { faBars, faClose, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Confirmindicator } from './Confirmindicator'
import { toast } from 'react-toastify'
import { register } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'


export const Nameedit = ({username , user , baseurl , token}) => {


    const [name  , setName] = useState('')
    const [email , setEmail] = useState('')
    const dispatch = useDispatch()
    const [showeditpanel, setShoweditpanel] = useState(false)

    const handleedit = ()  => {

        const id = user?.id
       
        const edit = async () => {
            try{
            const res  = await fetch(baseurl +  `/api/users/${id}` ,{
                method : 'PUT',
                headers : {
                    "Authorization" : `Bearer ${token}` ,
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    username : name,
                })

            })

           if(res.ok) {
            const updateduser = await res
            console.log(updateduser)
          toast.success('username updated')
          dispatch(register(updateduser))
          
           }
        }
         catch(err){
                console.log(err)
                toast.error(err)
            }
        }
        edit()
    }

    const handlenameclick = ()  => {
        setShoweditpanel(true)
    }
    
  return (
    <>
      <div >
        <span> Name : {username} <FontAwesomeIcon icon={faEdit}  onClick={handlenameclick}  className='cursor-pointer'/></span>
        {showeditpanel && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    
    <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
    
   
    <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-auto z-10 transition-transform transform scale-95">
    
      <h2 className="text-xl font-semibold mb-4">Edit Name</h2>
      <input 
        type="text" 
        className="p-2 m-2 w-full rounded-md border border-gray-300 outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" 
        onChange={e => setName(e.target.value)} 
        value={name} 
        placeholder="Enter new name"
      />
      <button 
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={handleedit} // Assuming you have a function to close the panel
      >
        Save
      </button>
      <button 
        className="mt-4 ml-4  bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        onClick={() => setShoweditpanel(false)} 
      >
        cancle
      </button>
    </div>
  </div>
)}

       </div>
       <div>
        <span> Email : {user?.email} <FontAwesomeIcon icon={faEdit} /></span>
       </div>
     </>
  )
}
