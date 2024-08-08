import { faBars, faClose, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Confirmindicator } from './Confirmindicator'
import { toast } from 'react-toastify'
import { register } from '../../redux/authSlice'
import { useDispatch } from 'react-redux'
import { Emailedit } from './Emailedit'
import { Editmodel } from './Editmodel'


export const Nameedit = ({username , user , baseurl , token}) => {


    const [name  , setName] = useState('')
    const dispatch = useDispatch()
    const [showeditpanel, setShoweditpanel] = useState(false)

    const handlename = ()  => {

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
            const updateduser = await res.json()
          toast.success('username updated')
          dispatch(register({ token, user: updateduser }));
          setShoweditpanel(false)
          
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

      <div className=''>
        <input placeholder={username} className='m-2 p-2 border outline-none text-blue-400 bg-white' disabled={true}/> <FontAwesomeIcon icon={faEdit}  onClick={handlenameclick}  className='cursor-pointer text-blue-400'/>
        {showeditpanel && (
           <Editmodel  setEmail={setName} setShoweditpanel={setShoweditpanel} handleemail={handlename} editname={'Name'} placeholder={'name'}/>
)}

       </div>
             <Emailedit faedit={faEdit} FontAwesomeIcon={FontAwesomeIcon} user={user} token={token} dispatch={dispatch} register={register} />
     </>
  )
}
