import React, { useState } from 'react'
import './productimg.css'
export const Productimg = ({ imageurl, scale = 6}) => {
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

  return (
    <div
      className="relative overflow-hidden  sm: w-[256px] sm: h-[256px] md:w-80 md:h-80  lg:h-96 xl:w-128 xl:h-128 mt-10  lg:ml-2 sm: ml-20 xsm:ml-16 "
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseMove={handleMouseMove}
      style={{ backgroundImage: `url(${imageurl})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-500 shadow-md   cursor-zoom-in  `}
        style={{
          backgroundImage: `url(${imageurl})`,
        
        }}
      />
      {isHover && (
        <div
          className=" magnifier-circle "
          style={{
            top: mousePosition.y,
            left: mousePosition.x,
            backgroundImage: `url(${imageurl})`,
            backgroundPosition: transformOrigin,
            backgroundSize: `${scale * 100}%`,
          }}
        ></div>
        
      )}
    </div>
  )
}
