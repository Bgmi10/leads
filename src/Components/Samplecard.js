import React, { useEffect, useState } from 'react';
import { addtocart } from '../redux/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { baseurl, token } from '../utils/constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Samplecard.css'; // Create this CSS file for transitions

export const Samplecard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  const [data, setData] = useState(null);

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
  };

  const isItemInCart = (id) => {
    return cartItems.some(cartItem => cartItem.id === id);
  };

  return (
    <>
      <div className='flex flex-wrap justify-center mb-40 m-4'>
        {data?.data.map((i) => (
          <CSSTransition
            key={i.id}
            timeout={300}
            classNames="fade"
          >
            <div className='m-4 p-4 w-80 cursor-pointer hover:shadow-xl transition-shadow duration-300 bg-white rounded-lg overflow-hidden shadow-md relative'>
              {i.attributes.stock === 0 ? (
                <span className='bg-red-400 text-white font-sans text-xs p-1 rounded-[4px] absolute top-2 left-2'>Sold out</span>
              ) : (
                <span className='bg-green-400 text-white font-sans text-xs p-1 rounded-[4px] absolute top-2 left-2'>In-stock</span>
              )}
              <Link to={`/productdetail/${i.id}`}>
                <img src={baseurl + i.attributes.img.data.attributes.url} className='w-full h-60 object-cover rounded-t-lg' alt={i.attributes.name} />
                <div className='p-4'>
                  <span className='text-md font-semibold break-words decoration-gray-500 underline hover:scale-105'>{i.attributes.name.slice(0, 28)}</span>
                  <p className='mt-3 text-lg font-sans'>
                    ₹{i.attributes.price} 
                    <span className='text-gray-400 text-sm font-light line-through ml-2'>₹{i.attributes.actualprice ? i.attributes.actualprice : null}</span>
                    {i.attributes.offertag >= 1 && <span className='text-green-500 ml-2 font-normal text-xs'><span className='text-sm'>save</span> {i.attributes.offertag}%</span>}
                  </p>
                </div>
              </Link>
              {isItemInCart(i.id) ? (
                <Link to={'/mycart'}>
                  <button className='bg-black text-white rounded-md p-2 w-full hover:scale-105 mt-3 transition duration-300'><ShoppingCartCheckoutIcon /> Checkout</button>
                </Link>
              ) : (
                <button className='bg-blue-400 text-white rounded-md p-2 w-full hover:scale-105 mt-3 hover:bg-blue-500 transition duration-300' onClick={() => handleclick(i)}><ShoppingCartIcon /> Add to cart</button>
              )}
            </div>
          </CSSTransition>
        ))}
      </div>
    </>
  );
};
