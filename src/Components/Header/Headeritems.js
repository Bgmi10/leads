import React from 'react'

export const Headeritems = () => {

    const items = [
        {
            title : 'Shop',
            link : '/shop'
        }, {
            title : 'Learn ',
            link : '/about'
        }, {
            title : 'Bulk order',
            link : '/bulk-order'
        }, {
            title : 'Recipes',
            link : '/recipes'
        }, {
            title : 'Track my order',
            link : '/track-order'
        }   
    ]
  return (
    <div className='lg:flex m-5 gap-6 space-x-2 sm: hidden '>
        {
            items.map((i , index) =>(
                <div key={index} className='text-black hover:text-blue-500 cursor-pointer font-normal hover:underline transition-colors duration-300'>
                    {i.title}
                </div>
            ))
        }
    </div>
  )
}
