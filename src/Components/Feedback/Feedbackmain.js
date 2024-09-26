import React from 'react'
import { ReviewCard } from './ReviewCard'

export const Feedbackmain = () => {
  return (
    <div className="bg-white  px-5 sm: mt-[-650px] lg:mt-[20px] ">
      {/* Title Section */}
      <div className='justify-center flex  sm: mb-14'>
        <h2 className='text-3xl font-semibold text-gray-800'>Our Customer Reviews</h2>
      </div>
      
      {/* Review Cards */}
      <ReviewCard />


    </div>
  )
}
