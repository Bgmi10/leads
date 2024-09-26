import React, { useEffect, useState } from 'react'
import './productimg.css'
import LensBlurIcon from '@mui/icons-material/LensBlur';
import { useDispatch } from 'react-redux';
import { producthover } from '../../redux/producthoverslice';



export const Productimg = ({ imageurl, scale = 2}) => {
  
  const [transformOrigin, setTransformOrigin] = useState('50% 50%')
  
  const [isHover, setIsHover] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })
  const dispatch = useDispatch()
  

  
  useEffect(() => {
   dispatch(producthover(isHover))
  },[isHover])
  

  const handleMouseOver = () => {
    setIsHover(true)
  }

  const handleMouseOut = () => {
    setIsHover(false)
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setTransformOrigin(`${x}% ${y}%`)
    setMousePosition({ x: e.pageX - left, y: e.pageY - top })
    
    
  }
  const sm  = window.innerWidth < 768
  return (
    <>
    <div
      className="relative overflow-hidden  sm: justify-center sm: flex sm: h-[256px] md:w-80 md:h-80 cursor-none  lg:h-[382px] xl:w-128 xl:h-128 lg:mt-9 sm: mt-4 lg:ml-6 lg:border rounded-md"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${imageurl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      
    
    </div>
    <button className='absolute mt-[-120px]'>prev</button>
   {isHover && <div onMouseMove={handleMouseMove} style={{ position : 'absolute' ,top : mousePosition.y + 141,left : mousePosition.x + 119,  backgroundPosition : transformOrigin,  transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'}}>
       <LensBlurIcon fontSize='medium' />
    
    </div>}
    <div className='justify-end flex'>
    <button className='absolute mt-[-120px]' >next</button>
    </div>
   <div className={!sm ? 'ml-[520px] absolute ' : 'hidden'}>
    {isHover && (
     <>
     
      <div
        className=" magnifier-circle"
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
          backgroundImage: `url(${imageurl})`,
          backgroundPosition: transformOrigin,
          backgroundSize: `${scale * 100}%`,
        }}
      ></div>
      </>
      
    )}
    </div>
    </>
  )
}
