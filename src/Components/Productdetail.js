import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseurl, token } from '../utils/constants'
import { Productimg } from './Productimg'
import { Productoverview } from './Productoverview'
import { useSelector } from 'react-redux'
import { Multiimgs } from './Multiimgs'

export const Productdetail = () => {

    const {id} = useParams()

    const [data, setData] = useState(null)
     
    const imgslice = useSelector(store => store.multiimg)
    
    const fetch_data = async () =>{
        const res = await fetch(`${baseurl}/api/products/${id}?populate=*`,{
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
    <div className="lg:flex sm:hidden ">
      <Multiimgs data={data}/>
     <Productimg imageurl={ baseurl + imgslice }/>

     <Productoverview  data={data}/>
  </div>
  </>
  )
}


export default Productdetail