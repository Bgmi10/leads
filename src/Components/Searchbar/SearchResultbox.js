import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cacheresult } from '../../redux/Searchcacheslice'

export const SearchResultbox = ({userinput}) => {

    const [data , setData] = useState(null)
    const cacheresults = useSelector(store => store.cacheresults)
    
    const dispatch = useDispatch()
    const fetch_data = async () =>{
        const res = await fetch(`https://dummyjson.com/products/search?q=${userinput}&limit=6`)

        const json = await res.json()
        dispatch(cacheresult({[userinput] : json}))
    
        setData(json)
    }

    useEffect(() => {
     const t =  setTimeout(() => {
        if(cacheresults[userinput]){
            setData(cacheresults[userinput])
        }
        
        else{
        fetch_data()
    } 
      }, 200);    
      
      return () => clearTimeout(t)
    },[userinput])

  return (
   <>
    <div className='bg-white font-normal text-black border w-[385px] mt-[-15px] z-50 ml-4 rounded-md h-[300px] '>
             {
                data?.products.map((i) => (
                    <div className='p-2 m-3 ' key={i.id}>
                          <ol className='flex justify-between'>
                            <li>{i.title}</li>
                            <img src={i.thumbnail} className='h-5 w-5'  />
                          </ol>
                    </div>
                ))
             }
    </div>
   </>
  )
}
