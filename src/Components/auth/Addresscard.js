import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import { Addressform } from './Addressform';
import { baseurl, token } from '../../utils/constants';
import { toast } from 'react-toastify';
import { Addresscards } from './Addresscards';



export const Addresscard = ({filterdata}) => {

    const [isopen  , setIsopen ] = useState(false)
    const [loadedData , setLoadedData] = useState(null)
    
     
    const handleeditaddress = (id) => {
        setIsopen(true)
       const loadeddata = filterdata.find((i) => i.id === id)
       setLoadedData(loadeddata)

    }

    const handleFormSubmit  = () => {
       const id = loadedData?.id
       const data = loadedData
        const update_data = async () => {
        try{
            const res = await fetch(baseurl + `/api/addresses/${id}`,{
                method : "PUT",
                headers : {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                  data :  data?.attributes
                })
            })
            if(res.ok){
                toast.success('address updated ')
                setIsopen(false)
            }
        }
        catch(err){
            console.log(err)
        }
        
        }
        update_data()
    }
  return (
   <>
       <Addresscards handleeditaddress={handleeditaddress} filterdata={filterdata} token={token} baseurl={baseurl}/>

        {isopen &&  <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black opacity-65 w-full h-full absolute"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto z-10">
            <div className='flex justify-end m-1'>
              <FontAwesomeIcon icon={faClose} className='text-xl cursor-pointer' onClick={() => setIsopen(false)} />
            </div>
          <Addressform
          address={loadedData.attributes.address}
          city={loadedData.attributes.city}
          locality={loadedData.attributes.locality}
          name={loadedData.attributes.name}
          mobilenumber={loadedData.attributes.mobilenumber}
          state={loadedData.attributes.state}
          pincode={loadedData.attributes.pincode}
          statesOptions={["State 1", "State 2", "State 3"]}
          onAddressChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, address: val } })}
          onCityChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, city: val } })}
          onLocalityChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, locality: val } })}
          onNameChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, name: val } })}
          onNumberChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, mobilenumber: val } })}
          onStateChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, state: val } })}
          onPincodeChange={(val) => setLoadedData({ ...loadedData, attributes: { ...loadedData.attributes, pincode: val } })}
          handleFormSubmit={handleFormSubmit}
        />
         </div>
         </div>
         </div>}
   </>
  )
}
