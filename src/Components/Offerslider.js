import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Offerslider = () => {
  

    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows : false
    }

    const data = [
        '🚚 Free shipping above Rs. 699/-',
        '🎉 Upto 25% offer on all orders',
        '🎁 FreeGift with every purchase!'
        
    ]
    
    
  return (
    <div className=' bg-blue-400'>
    <Slider {...settings} className=' sm: mr-6 lg:ml-4 ' >
        {
            data.map((i, index) =>(
                <div key={index}>
                    <p className='text-black font-normal text-sm text-center'>{i}</p>
                </div>
            ))
        }
    </Slider>
    </div>

    
  )
}
