import React from 'react'
import { Breadcrumbs } from './Breadcrumbs'

export const Productoverview = ({data}) => {
  
  return (
   <>
     <div className='p-3 m-4'>
         <Breadcrumbs />
         <div className='p-1'>
         <span className='font-medium text-2xl '>{data?.data.attributes?.name}</span>
         <span>{data?.data.attributes.rating}</span>
         </div>
     </div>
   </>
  )
} 
