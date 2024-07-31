import React, { useState } from 'react';

export const Imageshowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const data = [
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-01_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-03_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-04_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-02_1296x.jpg?v=1719462554'
    
  ];

  return (
    
    <>
    <div className='justify-center flex m-4 '>
        <span className='text-center text-black font-sans lg:text-4xl sm: text-2xl'>Upgrade Your Food Experience</span>
       
    </div>
    <div className='justify-center flex m-2'>
        <span className='text-center text-black font-light lg:text-2xl sm: text-xl'>Why choose 'Better'?</span>
       
    </div>
    <div className='flex justify-center h-screen  p-5  relative '>
      <div className='relative flex gap-1'>
        {data.map((i, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out relative ${
              hoveredIndex === index ? 'w-[130%] z-20 ' : 'lg:w-[250px] sm: w-[60px] '
            } lg:h-[450px] sm: h-[140px] rounded-3xl overflow-hidden`}
            onMouseEnter={() => setHoveredIndex(index)} // setHoverindex(2)
            onMouseLeave={() => setHoveredIndex(index)} // 0 
          >
            <img
              src={i}
              alt={`Showcase Image ${index + 1}`}
              className='w-full h-full object-cover rounded-3xl '
            />
            {hoveredIndex !== index && (
              <div className='absolute inset-0 bg-black bg-opacity-50 rounded-3xl'></div>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
 };


