import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SearchResultbox } from './SearchResultbox';

export const Searchbar = () => {
  const [dynamicPlaceholder, setDynamicPlaceholder] = useState('Search for "Groundnut oil"');

  const [isopen , setIsopen] = useState(false)

  const [userinput , setUserinput] = useState('')

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
  
  const handlefocus = () => {
    setIsopen(true)
  }

  const handleblur = () => {
    setIsopen(false)
  }
  return (
    <div >
      <div className='relative lg:flex items-center m-4  hidden'>
        <input 
          type='text' 
          placeholder={dynamicPlaceholder} 
          className='lg:w-96 p-2 pl-4 pr-10 border shadow-sm border-gray-300 rounded-md focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out'
          value={userinput}
          onChange={e => setUserinput(e.target.value)}
          onFocus= {handlefocus}
          onBlur={handleblur}
        />
        <SearchIcon 
          fontSize='large' 
          className='cursor-pointer absolute right-1 border-l text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out'
        />
      </div>
      {isopen && userinput.length > 0 && <div className='flex-col flex  '>
        <SearchResultbox userinput={userinput}  />
      </div>}
    </div>
  );
}
