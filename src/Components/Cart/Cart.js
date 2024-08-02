import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
  const cartcount = useSelector(store => store.cart.items);

  return (
    <div className="flex justify-end">
      <a href={'/mycart'} className="relative flex items-center">
        <div className="relative">
          <FontAwesomeIcon
            icon={faCartArrowDown}
            className="text-black hover:text-blue-400 transition-colors duration-200  text-3xl"
            
          />
          {cartcount.length > 0 && (
            <div className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce">
              {cartcount.length}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
