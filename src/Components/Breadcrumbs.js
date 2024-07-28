import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Breadcrumbs = () => {

    const location = useLocation()
    const pathnames = location.pathname.split('/').filter(i => i)
    
  return (
    <div className='flex p-3  '>
        <Link to={'/'}>
         Home
        </Link>
        {
            pathnames.map((i) => (
                <Link to={i}>
               <div key={i} >
               <span className=''><span className='m-1'>/</span>{i}</span>
               </div>
               </Link>
            ))
        }
    </div>
  )
}
