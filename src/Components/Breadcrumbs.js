import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';

export const Breadcrumbs = () => {

    const location = useLocation()
    const pathnames = location.pathname.split('/').filter(i => i)
    
  return (
    <div className='flex   '>
        <Link to={'/'}>
         <HomeIcon fontSize='small' className='mt-[-4px]'/>Home
        </Link>
        {
            pathnames.map((i) => (
                <Link to={i}  key={i}>
               <div >
               <span className=''><span className='m-1'>/</span>{i}</span>
               </div>
               </Link>
            ))
        }
    </div>
  )
}
