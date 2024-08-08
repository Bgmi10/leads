import React, { useState } from 'react'
import { baseurl } from '../../utils/constants'
import { Validateform } from '../../utils/Validateform'
import { toast } from 'react-toastify'
import { Editmodel } from './Editmodel'

export const Emailedit = ({FontAwesomeIcon , faedit , user , token  , dispatch , register }) => {

    const [email , setEmail] = useState('')
    const [showeditpanel , setShoweditpanel] = useState(false)

    const {Email} = Validateform(email)
   
   
    const handleemail = () => {
        if(!Email){
            toast.warning('Please enter a  valid email')
            return
        }
       
           
        const email_edit = async () =>  {
            const id = user?.id
            
            try{
                const res = await fetch(`${baseurl}${`/api/users/${id}`}`,{
                    method : "PUT",
                    headers : {
                        'Authorization' : `Bearer ${token}`,
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({
                      email : email
                    })
                })

                if(res.ok){
                    const updateddata = await res.json()
                    dispatch(register({user : updateddata}))
                    toast.success('email updated sucessfully')
                    setShoweditpanel(false)
                }
            }

            catch (err){
                console.log(err)
            }
        }
        email_edit()
       

        
    }

    const handleedit = () => {
        setShoweditpanel(true)
    }
  return ( 
   <>
      <div>
        <input placeholder={user?.email}  className='bg-white p-2 m-2  border outline-none ' disabled/> <FontAwesomeIcon icon={faedit}  className = 'cursor-pointer text-blue-400' onClick={handleedit}/>
        {showeditpanel && (
            <Editmodel setEmail={setEmail} email={email} handleemail={handleemail} setShoweditpanel={setShoweditpanel} editname={'Email'} placeholder={'email'}/>
          )}

       </div>
   </>
  )
}
