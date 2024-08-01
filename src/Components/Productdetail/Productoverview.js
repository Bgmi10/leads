import React from 'react';
import { Breadcrumbs } from '../Breadcrumbs';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './Productoverview.css'; 
import { useDispatch, useSelector } from 'react-redux';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Dynamicaddtocartbutton } from '../Dynamicaddtocartbutton';
import { addtocart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';


export const Productoverview = ({ data }) => {
  const ishover = useSelector(store => store.producthover.hover);
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.items)

  const handleclick = (item) => {
    dispatch(addtocart(item));
    toast.success(`Successfully added ${item.attributes.name}   `)
  };

  const isItemInCart = (id) => {
    return cartItems.some(cartItem => cartItem.id === id);
  };

  return (
    <>
      <div className="py-5 m-4">
        <Breadcrumbs />
        <div className="py-2">
          <span className="font-bold text-2xl text-gray-800">{data?.data?.attributes?.name}</span>
        </div>
        {ishover && (
          <>
            <div className="flex items-center py-2">
              <span className="font-semibold text-2xl">₹{data?.data?.attributes?.price}</span>
              <span className="ml-2 text-gray-500 text-base line-through">₹{data?.data?.attributes?.actualprice}</span>
              {data?.data?.attributes?.offertag && (
                <div className="ml-3 px-2 bg-green-100 text-green-700 rounded-md flex items-center offer-shimmer">
                  <LocalOfferIcon className="mr-1 text-green-600" />
                  <span className="text-sm">{data?.data?.attributes?.offertag}% off</span>
                </div>
              )}
            </div>
            <div className="mt-4 text-gray-600 text-base absolute">
              <p>{data?.data?.attributes?.desc}</p>
              <div className="mt-4">
                <span className="block text-gray-600 text-base">Quantity</span>
                <div className="flex items-center mt-2">
                  <button className="p-2 border border-gray-300 rounded-l-md flex items-center justify-center">
                    <RemoveIcon />
                  </button>
                  <span className="mx-4">Value</span>
                  <button className="p-2 border border-gray-300 rounded-r-md flex items-center justify-center" >
                    <AddIcon />
                  </button>
                  <div className='m-4'>
                 <Dynamicaddtocartbutton item={data?.data} isItemInCart={isItemInCart} handleclick={handleclick}/>
                 </div>
                </div>
              </div>
              
            </div>
          </>
        )}
      </div>
    </>
  );
};
