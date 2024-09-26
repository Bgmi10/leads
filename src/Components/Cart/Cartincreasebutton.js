import React from 'react';

import AddIcon from '@mui/icons-material/Add';
export const Cartincreasebutton = ({ handleIncrease, i, cartItem }) => {
  return (
    <button 
      className='font-normal text-xs text-gray-400 cursor-pointer border border-gray-300 hover:text-gray-600 rounded-lg p-2 hover:bg-gray-100 transition'
      onClick={() => handleIncrease(i?.id, cartItem, i)}
    >
      <AddIcon  />
    </button>
  );
};
