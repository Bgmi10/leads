import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Productdetail/Productoverview.css'
import './customslide.css';

export const Mainslider = () => {
    const [desktop , setDesktop] = useState(null)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const data = [
            'https://www.tatasimplybetter.com/cdn/shop/files/COLD_Oil_coconutt_1270X730_5178abf5-fd75-49ad-ab6e-3c3dd84dff1e_1512x.jpg?v=1690288449',
            'https://www.tatasimplybetter.com/cdn/shop/files/COLD_Oil_groundnut_1270X730_03e79424-faa5-4911-98c1-c79bd1445a02_1512x.jpg?v=1690288433',
            'https://www.tatasimplybetter.com/cdn/shop/files/COLD_Oil_sesame_1270X730_be02e166-a8d3-4898-819e-2ac0da6a47ba_1512x.jpg?v=1690288483',
            'https://www.tatasimplybetter.com/cdn/shop/files/COLD_Oil_mustard_1270X730_325cd856-c48a-4775-ad0f-970bbdbfca72_1512x.jpg?v=1690288516'
        ];
        setDesktop(data)

    },[])
  

    return (
        <div className='lg:mt-6 sm: mt-8 '>
           { !desktop ? <div className='offer-shimmer '></div> : <Slider {...settings} className=' lg:mr-7 lg:ml-6 sm: mr-6 sm: ml-6 '>
                 { desktop.map((image, index) => (
                    <div key={index} className='lg:p-2 border-none outline-none'>
                        <img src={image} className='rounded-md ' alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>}
        </div>
    );
};

export default Mainslider;
