import React from 'react'
import { baseurl, token } from '../../utils/constants'
import { toast } from 'react-toastify'

export const Checkout = ({items}) => {
  

    const handlepayment = () => {
        const Checkout = async () => {
            try{
                const res = await fetch(baseurl + '/api/payments' , {
                    method : "POST",
                    headers : {
                    "Authorization" : `Bearer ${token}`,
                    "Content-Type" : 'application/json'
                }, 
                body : JSON.stringify({
                    amount : "1000",
                    firstname : 'suabsh',
                    email : 'subash@gmail.com',
                    phone : '7845442450',
                
                })

                })

                if(res.ok){
                    toast.success('paymentsuccess')
                    const data = await res
                    const dd = await data.json()
                    console.log(dd.paymentLink)
                }
                else{
                    toast.error('something went wrong')
                }
            }

            catch(err) {
                console.log(err)
            }
        }

        Checkout()
    } 

  return (
    <div >

        <button className='p-2 rounded-md bg-blue-400 font-normal text-white w-[300px] hover:bg-blue-500 transition-transform text-lg' onClick={handlepayment}>Place Order </button>
           
    </div>
  )
}
