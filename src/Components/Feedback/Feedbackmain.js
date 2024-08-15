import React from 'react'
import { ReviewCard } from './ReviewCard'

export const Feedbackmain = () => {
  return (
    <div className="bg-white  px-5 sm: mt-[-650px] lg:mt-[40px] ">
      {/* Title Section */}
      <div className='justify-center flex lg:mb-24 sm: mb-14'>
        <h2 className='text-3xl font-semibold text-gray-800'>Our Customer Reviews</h2>
      </div>
      
      {/* Review Cards */}
      <ReviewCard />


    </div>
  )
}
