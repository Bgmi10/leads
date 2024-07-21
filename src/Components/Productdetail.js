import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurl, token } from '../utils/constants'
import { Productimg } from './Productimg'
import { Productoverview } from './Productoverview'

export const Productdetail = () => {

    const {id} = useParams()

    const [data, setData] = useState(null)
    
    const fetch_data = async () =>{
        const res = await fetch(`${baseurl}/api/products/${id}?populate=img`,{
            headers :{
                "Authorization" : `bearer ${token}`
            }
        })

        const json = await res.json()
        setData(json)
    }
    useEffect(() =>{
      fetch_data()
    },[id])
  
  return (
    <>
    <div className="">
     <Productimg imageurl={ baseurl + data?.data?.attributes.img.data.attributes.url}/>

     <Productoverview />
  </div>
  </>
  )
}


export default Productdetail