import React, { useState } from 'react';
import { baseurl } from '../../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removefromcart, updateitemcartquantity } from '../../redux/cartSlice';
import Fab from '@mui/material/Fab';

export const Cartitems = ({ items }) => {
  const [arrowOpen, setArrowOpen] = useState(true);
  const cartItems = useSelector(store => store.cart.items);
  console.log(items)
  const dispatch = useDispatch();

  const handleToggle = () => {
    setArrowOpen(prev => !prev);
  };

  const handleIncrease = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      dispatch(updateitemcartquantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrease = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateitemcartquantity({ id, quantity: item.quantity - 1 }));
    }
  };
  

  const handledeleteitem = (id) => {
   
    dispatch(removefromcart(id))
    
  }
  return (
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
        const cartItem = cartItems.find(item => item.id === i.id);
        return (
          <div className='flex items-center justify-between p-4 border-b border-gray-200' key={i.id}>
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
                <button 
                  className='font-normal text-xl cursor-pointer' 
                  onClick={() => handleDecrease(i.id)} 
                  disabled={cartItem.quantity <= 1}
                >
                  <Fab variant="extended" size="small" color="default">-</Fab>
                </button>
                <span className='mx-4'>{cartItem.quantity}</span>
                <button 
                  className='font-normal text-2xl cursor-pointer' 
                  onClick={() => handleIncrease(i.id)}
                  disabled={i.attributes.stock === cartItem.quantity }
                >
               <Fab variant="extended" size="small" color="default">+</Fab>
                </button>
                <div className='ml-4 mt-1'>
                <button className='p-1 bg-black  text-white rounded-md  ' onClick={()=>handledeleteitem(i.id)}>Remove</button>
                </div>
                
              </div>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};
