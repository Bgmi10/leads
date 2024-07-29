import React, { useState } from 'react'
import './productimg.css'
import magni from '../images/mag.png'

export const Productimg = ({ imageurl, scale = 2}) => {
  const [transformOrigin, setTransformOrigin] = useState('50% 50%')
  const [isHover, setIsHover] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })

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
      className="relative overflow-hidden  sm: w-[230px] sm: m-10  sm: h-[256px] md:w-80 md:h-80 cursor-crosshair  lg:h-96 xl:w-128 xl:h-128 mt-10  lg:ml-24 border   rounded-md   "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${imageurl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
   
   
      
      
    </div>
    
   <div className={!sm ? 'ml-[500px] absolute ' : 'hidden'}>
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
