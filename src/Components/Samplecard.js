import React, { useEffect, useState } from 'react';
import { addtocart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { baseurl, token } from '../utils/constants';
import { CSSTransition } from 'react-transition-group';
import './Productdetail/Productoverview.css'
import './Samplecard.css'; 
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dynamicaddtocartbutton } from './Dynamicaddtocartbutton';

export const Samplecard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  const [data, setData] = useState(null);
  const [dynamicimg , setDynamicimg] = useState(null)

  const fetch_data = async () => {
    const res = await fetch(`${baseurl}/api/products?populate=img`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    fetch_data();
  }, []);

  const handleclick = (item) => {
    dispatch(addtocart(item));
    toast.success(`Successfully added ${item.attributes.name}   `)
  };

  const isItemInCart = (id) => {
    return cartItems.some(cartItem => cartItem.id === id);
  };

  const handlemouseleave = () => {
   setDynamicimg(null)

  }

  const handlemouseenter =  (id) => {
    setDynamicimg(id)
  }

  
  
  return (
    <>
      <div className='flex flex-wrap justify-center mb-10'>
       
        {data?.data.map((i) => (
          <CSSTransition
            key={i.id}
            timeout={300}
            classNames="fade"
          >
             <div>
             <a href={`/productdetail/${i.id}`}>
            <div className='m-2 p-2 w-64 cursor-pointer hover:shadow-xl transition-shadow duration-300  rounded-lg overflow-hidden shadow-md relative'>
              {i.attributes.stock   ? (
                <span className='bg-red-400 text-white font-sans text-xs p-1  absolute top-3 rounded-tl-md left-3'>Sold out</span>
              ) : (
                <span className='bg-green-400 text-white font-sans text-xs p-1  absolute top-3 rounded-tl-md left-3'>In-stock</span>
              )}
             
             
                      <img src='https://rukminim2.flixcart.com/www/32/32/promos/03/06/2019/9ecf225d-8a76-4075-a7d3-b13c9e9f1d89.png?q=70' className='absolute right-3 top-3 w-3 h-3' />
      
                
                <img src={dynamicimg === i.id ? ` ${baseurl}/uploads/New_Project_CE_32_CDF_1_3214874e72.png` :  `${baseurl}/uploads/New_Project_3_6_A14_D1_C_3f4cd5cbb1.png`} className={'object-cover rounded-lg border  transition-all duration-1000 '} alt={i.attributes.name} onMouseEnter={() => handlemouseenter(i.id)} onMouseLeave={handlemouseleave} />
                
              
            
              <div className='p-4'>
                  <span className='text-sm  font-normal break-words decoration-gray-500  hover:scale-105 hover:underline'>{i.attributes.name}</span>
                  <p className='mt-1 text-lg font-sans'>
                    ₹{i.attributes.price} 
                    <span className='text-gray-400 text-sm font-light line-through ml-2'>₹{i.attributes.actualprice ? i.attributes.actualprice : null}</span>
                    {i.attributes.offertag >= 1 && <span className='text-green-500 ml-2 font-normal text-xs'><span className='text-sm'>save</span> {Math.floor(((i.attributes.actualprice - i.attributes.price)  / i.attributes.actualprice * 100 ) )  }%</span>}
                  </p>
                </div>
                
              
              <Dynamicaddtocartbutton item={i}  isItemInCart={isItemInCart} handleclick={handleclick}/>
              
              
            
            </div>
            </a>
            </div>
          </CSSTransition>
        ))}
      </div>
      
    </>
  );
};
