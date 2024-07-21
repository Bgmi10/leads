import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchResultbox } from './SearchResultbox';

export const Searchbar = () => {
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState('Search for "Groundnut oil"');

  const oilSearchSuggestions = [
    '"Groundnut oil"',
    '"Coconut oil"',
    '"Sesame oil"',
    '"Sunflower oil"',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * oilSearchSuggestions.length);
      setDynamicPlaceholder('Search for ' + oilSearchSuggestions[randomIndex]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='search-container'>
      <div className='relative lg:flex items-center m-4 '>
        <input 
          type='text' 
          placeholder={dynamicPlaceholder} 
          className='lg:w-96 p-2 pl-4 pr-10 border-2 border-gray-300 rounded-full focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out'
        />
        <SearchIcon 
          fontSize='large' 
          className='cursor-pointer absolute right-8 border-l text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out'
        />
      </div>
      <div className='flex-col flex absolute'>
        <SearchResultbox />
      </div>
    </div>
  );
}
