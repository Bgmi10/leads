import React from 'react'
import { baseurl } from '../utils/constants'

export const Multiimgs = ({data}) => {

    
  return (
    <div className='ml-4 py-8'>
        {
            data?.data.attributes.groupimgs.data.map((i ) => (
                <img src={baseurl +  i.attributes.url} key={i.attributes.url} alt='groupimg'  className='w-[70px] rounded-md h-[70px] border m-2  cursor-pointer transition-transform hover:scale-105 hover:shadow-md' />
            ))
        }
    </div>
  )
}
