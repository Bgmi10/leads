import React, { useState } from 'react';

export const Imageshowcase = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const data = [
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-04_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-03_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-04_1296x.jpg?v=1719462554',
    'https://www.tatasimplybetter.com/cdn/shop/files/why-choose-02_1296x.jpg?v=1719462554'
  ];

  return (
    
    <>
    <div className='justify-center flex m-6'>
        <span className='text-center text-black font-sans text-4xl'>Upgrade Your Food Experience</span>
       
    </div>
    <div className='justify-center flex m-6'>
        <span className='text-center text-black font-light text-2xl'>Why choose 'Better'?</span>
       
    </div>
    <div className='flex justify-center h-screen  p-5  relative'>
      <div className='relative flex gap-1'>
        {data.map((src, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ease-in-out relative ${
              hoveredIndex === index ? 'w-[130%] z-20 ' : 'w-[250px] '
            } h-[500px] rounded-lg overflow-hidden`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(index)}
          >
            <img
              src={src}
              alt={`Showcase Image ${index + 1}`}
              className='w-full h-full object-cover rounded-3xl transition-transform duration-700 ease-in-out'
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

