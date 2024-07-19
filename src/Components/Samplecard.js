import React, { useEffect, useState } from 'react'
import { addtocart } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { baseurl, token } from '../utils/constants'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export const Samplecard = () => {

    const dispatch = useDispatch()
    const [data , setData] = useState(null)
    
    const fetch_data = async () =>{
        const res  = await fetch(`${baseurl}/api/products?populate=img` ,{
          method : 'GET',
          headers :{
            'Authorization' : `Bearer ${token}`
          }
        })

        const json = await res.json()

        setData(json)
    }
    useEffect(() => {
    fetch_data()
    },[])

 

    const handleclick = (index) =>{
     dispatch(addtocart(index))
    }
 
    
  return (
   <>
     <div className='flex mb-40 m-4 ' >
      {
        data?.data.map((i) =>(
          
          <div className='m-2 p-2 cursor-pointer  hover:shadow-xl' key={i.id}>
            {
              i.attributes.stock === 0 ?  <span className='bg-red-400 text-white font-sans text-xs p-1 rounded-[4px] absolute'>Sold out</span> : <span className='bg-green-400 text-white font-sans text-xs p-1 rounded-[4px] absolute'>In-stock</span>

              
            }
            {

            }
            <Link to={`/productdetail/${i.id}`} >
            <img src={baseurl + i.attributes.img.data.attributes.url}  className='w-60 h-60'/>
            <span className='text-md   font-normal break-words white   decoration-gray-500  underline hover:scale-105'>{i.attributes.name.slice(0,28)}</span>
            <p className='  mt-3 text-lg font-sans '>  ₹{i.attributes.price} <span className='text-gray-400 text-sm font-light line-through  m-1'>  ₹{i.attributes.actualprice ? i.attributes.actualprice  : null }</span>{i.attributes.offertag >= 1 && <span className='text-green-500 m-2 font-normal text-xs'><span className='text-sm'>save</span> {i.attributes.offertag }% </span>}</p>
            </Link>
            <button className='bg-blue-400 text-white rounded-md p-2 hover:scale-105 mt-3 w-60 hover:bg-blue-500' onClick={()=>handleclick(i)}><ShoppingCartIcon /> Add to cart</button>

          </div>
          
        ))
      }
     </div>
   </>
  )
}
