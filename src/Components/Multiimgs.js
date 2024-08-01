import React, { useEffect, useState } from 'react'
import { baseurl } from '../utils/constants'
import {addimg} from '../redux/multiimgslice'
import {useDispatch} from 'react-redux'

export const Multiimgs = ({data}) => {

  const dispatch = useDispatch()
  const firstimgurl = data?.data?.attributes?.groupimgs?.data?.[0]?.attributes?.url || ''
  const [ multiimgs, setMultiimgs] = useState(firstimgurl)
  

  const handlemouseenter = (url)  => {
    setMultiimgs(url)
  }
    
  useEffect(() => {
    if(multiimgs){
    dispatch(addimg(multiimgs))
  }
  },[multiimgs ])
  return (
    <div className='lg:ml-4 sm: ml-3 py-8 sm: flex lg:flex-col lg:flex'>
        {
            data?.data?.attributes?.groupimgs?.data?.map((i ) => (
                <img src={baseurl +  i.attributes.url} key={i.attributes.url} alt='groupimg'  className='w-[70px] rounded-md h-[70px] border l:m-2 sm: m-1 cursor-pointer transition-transform hover:scale-105 hover:shadow-md'  onMouseEnter={()=>handlemouseenter(i.attributes.url)}/>
            ))
        }
    </div>
  )
}