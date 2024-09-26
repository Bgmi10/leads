import React, { useState } from 'react';
import { baseurl } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removefromcart, updateitemcartquantity } from '../../redux/cartSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Cartincreasebutton } from './Cartincreasebutton';
import Fab from '@mui/material/Fab';
import { Cartdecreasebutton } from './Cartdecreasebutton'
import { Cartdeletebutton } from './Cartdeletebutton';



export const Cartitems = ({ items }) => {
  const [arrowOpen, setArrowOpen] = useState(true);
  
  
  const dispatch = useDispatch();

  const handleToggle = () => {
    setArrowOpen(prev => !prev);
  };

  const handleIncrease = (id , cartItem , i) => {
    const item = items.find(i => i.id === id);
    if (item) {
      dispatch(updateitemcartquantity({ id, quantity: item.quantity + 1 }));
    }

    if(i.attributes.stock === cartItem.quantity){
      toast.warning('stock exceeded')
    }
  };

  const handleDecrease = (id) => {
    const item = items.find(i => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateitemcartquantity({ id, quantity: item.quantity - 1 }));
    }
  };
  
  
  const handledeleteitem = (id , name) => {
   
    dispatch(removefromcart(id))
   
    toast.error(`${name} is removed from the cart`)
    
  }
  return (
    <>
    <div className='border w-full lg:w-3/4 xl:w-1/2 mx-auto  h-auto mt-10 shadow-lg rounded-lg lg:ml-20 '>
      <div className='shadow-md border-b p-4 flex justify-between items-center '>
        <span className='font-semibold text-2xl'>My Cart</span>
        <FontAwesomeIcon 
          icon={arrowOpen ? faAngleDown : faAngleUp} 
          className='text-xl cursor-pointer' 
          onClick={handleToggle} 
        />
      </div>
      {arrowOpen && items.map((i) => {
        const cartItem = items.find(item => item.id === i.id);
        return (
          <div className='flex items-center justify-start p-4 border-b border-gray-200' key={i.id}>
            <div className='flex-shrink-0'>
              <Link to={`/productdetail/${i.id}`}>
                <img 
                  src={baseurl + i.attributes.img.data.attributes.url} 
                  alt={i.attributes.name} 
                  className='w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-lg shadow-md' 
                />
              </Link>
            </div>
            <div className='ml-4 flex flex-col justify-center'>
              <Link to={`/productdetail/${i.id}`}>
                <span className='text-lg font-semibold text-gray-800 hover:underline'>
                  {i.attributes.name}
                </span>
              </Link>
              <span className='text-md font-medium text-gray-600'>
                ₹{i.attributes.price} 
                <span className='line-through text-gray-400 ml-2'>₹{i.attributes.actualprice}</span>
              </span>
              <div className='flex items-center mt-2'>
                <Cartdecreasebutton i={i} handleDecrease={handleDecrease} Fab={Fab}/>
                <span className='mx-4'>{cartItem.quantity}</span>
                <Cartincreasebutton handleIncrease={handleIncrease} i={i} cartItem={cartItem} Fab={Fab}/>
                
                <Cartdeletebutton  handledeleteitem={handledeleteitem} i={i}/>
              </div>
             
            </div>
          </div>
        );
      })}
  
    </div>
    </>
  );
};
