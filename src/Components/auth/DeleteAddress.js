import React from 'react'
import { toast } from 'react-toastify'

export const DeleteAddress = ({FontAwesomeIcon , faTrash , i , filterdata , baseurl , token}) => {
    
    const handledel = (id) => {

        const onloaddata = filterdata.find((i) => i.id === id)

        const delete_address = async () => {
         try{  
            const res = await fetch(baseurl + `/api/addresses/${onloaddata.id}`,{
                method : 'DELETE',
                headers : {
                     'Authorization' : `Bearer ${token}`,
                }
            })
       

            if(res.ok){
                toast.error('address deleted')
            }
        }
         catch(err){
            console.log(err)
            toast.error(err)
         }   
        }
     
        delete_address()
    }

     
   
  return (
   <>
      <FontAwesomeIcon icon={faTrash} onClick={() => handledel(i.id)}  className='ml-2  text-red-500 cursor-pointer ' />
      
      
   </>
  )
}
