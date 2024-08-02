import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const cartcount = useSelector(store => store.cart.items);

  return (
    <div className='flex justify-end mt-5 mr-3 '>
      <a href={'/mycart'}>
      <div className='relative'>
       
        <span className='flex items-center bg-green-300  rounded-sm  px-1 py-1 text-md cursor-pointer shadow-md'>
          <FontAwesomeIcon icon={faCartArrowDown} className='mr-1' />
          {cartcount.length}
        </span>
        {cartcount.length > 0 && (
          <div className='absolute -top-1  h-2 w-2 bg-red-500 rounded-full animate-ping'></div>
        )}
       
      </div>
      </a>
    </div>
  );
};
