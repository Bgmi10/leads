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
      <div className='flex flex-wrap justify-center mb-10  '>
        {data?.data.map((i) => (
          <CSSTransition
            key={i.id}
            timeout={300}
            classNames="fade"
          >
            <div className='m-2 p-2 w-80 h-auto cursor-pointer hover:shadow-xl transition-shadow duration-300  rounded-lg overflow-hidden shadow-md relative'>
              {i.attributes.stock === 0 ? (
                <span className='bg-red-400 text-white font-sans text-xs p-1 rounded-[4px] absolute top-2 left-2'>Sold out</span>
              ) : (
                <span className='bg-green-400 text-white font-sans text-xs p-1 rounded-[4px] absolute top-2 left-2'>In-stock</span>
              )}
              <a href={`/productdetail/${i.id}`}>
                <img src={dynamicimg === i.id ?  'https://www.tatasimplybetter.com/cdn/shop/files/01_8c295e30-011b-4eb1-ab78-eb9e556d783b_2048x2048.jpg?v=1696853707' : 'https://www.tatasimplybetter.com/cdn/shop/files/02_55327725-425c-47ca-9bfc-95174cfcec22_2048x2048.jpg?v=1696853707'} className='w-full h-60 object-cover rounded-lg border transition-transform duration-150' alt={i.attributes.name} onMouseEnter={() => handlemouseenter(i.id)} onMouseLeave={handlemouseleave} />
                <div className='p-4'>
                  <span className='text-md font-sans break-words decoration-gray-500  hover:scale-105 hover:underline'>{i.attributes.name}</span>
                  <p className='mt-3 text-lg font-sans'>
                    ₹{i.attributes.price} 
                    <span className='text-gray-400 text-sm font-light line-through ml-2'>₹{i.attributes.actualprice ? i.attributes.actualprice : null}</span>
                    {i.attributes.offertag >= 1 && <span className='text-green-500 ml-2 font-normal text-xs'><span className='text-sm'>save</span> {i.attributes.offertag}%</span>}
                  </p>
                </div>
              </a>
              <Dynamicaddtocartbutton item={i}  isItemInCart={isItemInCart } handleclick={handleclick}/>
            </div>
          </CSSTransition>
        ))}
      </div>
      
    </>
  );
};
