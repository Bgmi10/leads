import React, { useState } from 'react'
import { baseurl, token } from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

export const Changepassword = () => {

    const [showpanel , setShowpanel] = useState(false);
    const [olderpassword , setOlderpassword] = useState('');
    const [newpassword , setNewpassword] = useState('');
    const [showpassword , setShowpassword] = useState(false);
    
     const handlechangepassword = () => {
            
          const Changepassword = async () => {
            try{
                const res = await fetch(baseurl + `/api/auth/change-password` , {
                    method : "POST",
                    headers : {
                        "Authorization" : `Bearer ${token}`,
                         'Content-Type' : 'application/json',
                         
                    },
                    body : JSON.stringify({
                        olderpassword : olderpassword,
                        newpassword : newpassword
                    })
                })

                if(res.ok){
                    toast.success('password changed')
                    setShowpanel(false)
                }
                
            }
            catch(err){
                console.log(err)
                toast.error('something went wrong')
            }
          }

          Changepassword()

          setShowpanel(true)
     }

  return (
    <>
       <div>
       <button onClick={() => setShowpanel(true)} className='bg-gray-600 hover:bg-gray-700 text-white font-normal py-2 px-[35px] ml-3 mt-2 rounded-sm'>
              Change Password
       </button>

            { showpanel && <div className="fixed inset-0 flex items-center justify-center z-50">
    
                <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
                 <div className="relative bg-white rounded-lg shadow-lg p-8 max-w-sm w-full mx-auto z-10   transition-transform transform scale-95">
                      <input type={showpassword ? 'password' : 'text'}  className='p-2 m-3 rounded-md border outline-none ' placeholder='olderpassword' onChange={e => setOlderpassword(e.target.value)}/>
                      <FontAwesomeIcon icon={showpassword ? faEyeSlash : faEye}  onClick={() => setShowpassword(prev => !prev)}/>
                      <input type={ showpassword ? 'password' : 'text'}  className='p-2 m-3 rounded-md border outline-none ' placeholder='new password' onChange={e => setNewpassword(e.target.value)}/>
                 <div className='m-4 '> 
                          <button className='text-white bg-blue-400 p-2 rounded-md' onClick={handlechangepassword}>Confirm</button> 
                           <button className='ml-3 bg-red-500 rounded-md text-white p-2' onClick={() => setShowpanel(false)}>Cancel</button>
                </div>
                    </div>
            </div>}

        </div>
    </>
  )
}
