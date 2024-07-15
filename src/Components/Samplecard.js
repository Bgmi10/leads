import React, { useEffect, useState } from 'react'
import { addtocart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

export const Samplecard = () => {
    const dispatch = useDispatch()
    const [data , setData] = useState(null)

    const fetch_data = async () =>{
        const res  = await fetch(`https://www.tatasimplybetter.com/products/tata-simply-better-coldpressed-groundnut-oil-1l.js`)

        const json = await res.json()

        console.log(json)

        setData(json)
    }
    useEffect(() => {
    fetch_data()
    },[])

 
    const imgs = data?.images

    const handleclick = (index) =>{
     dispatch(addtocart(index))
    }
  return (
   <>
     <div  >
      {
        imgs?.map((i , index) => (
            <>
              <span className='border bg-black rounded-md p-1 m-4 absolute   text-white cursor-pointer ' onClick={()=>handleclick(index)}> Add + </span>
              <img src={i} alt='img' key={index} className='w-52 m-4 p-2 h-32 cursor-pointer' />
            </>
        ))
      }
     </div>
   </>
  )
}
