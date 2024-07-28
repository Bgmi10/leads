import React from 'react'

export const Productoverview = ({data}) => {
  console.log(data)
  return (
   <>
     <div className='p-4 m-10'>
         <span className='font-medium text-2xl'>{data?.data.attributes?.name}</span>
         <span>{data?.data.attributes.rating}</span>
     </div>
   </>
  )
} 
