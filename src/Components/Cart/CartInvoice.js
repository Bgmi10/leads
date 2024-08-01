import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { baseurl } from '../../utils/constants';


const stripePromise = loadStripe('pk_test_51OChs5SEwlF820YlfarGX8PnX1iVb2WokJJGEZ6783WO50NW3CH1j0TqYTj1pYSuxagAQ8quQJY6RAZcR9yQXm3E00M865Hxi2');

export const CartInvoice = ({ items }) => {


  const totalPrice = items.reduce((acc, item) => acc + item.attributes.price  * item.quantity , 0)  
  const originalPrice = items.reduce((acc, item) => acc + item.attributes.actualprice * item.quantity, 0) 
  const totalDeliveryCharge = items.reduce((acc, item) => acc + item.attributes.deliveryCharges * item.quantity, 0);
  const discountPrice = originalPrice - totalPrice;

  let finalPrice = originalPrice - discountPrice;

  const isFreeDelivery = finalPrice >= 700;
  if (!isFreeDelivery) {
    finalPrice += totalDeliveryCharge;
  }

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call your backend to create a checkout session
    const response = await fetch(  'http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items, // Send items data to your backend
      }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // Handle error
      console.error(result.error.message);
    }
  };

  return (
    <div className='w-96 h-86 border m-10  p-4 rounded-lg shadow-md'>
      <div className='border-b p-4 '>
        <span className='font-semibold text-xl text-gray-700'>Price Detail</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Price ({items.length} items)</span>
        <span>₹{originalPrice}</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Flat Discount</span>
        <span className='text-red-400'>- ₹{discountPrice}</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Delivery Charges</span>
        <span className={isFreeDelivery ? 'text-green-400' : ''}>
          {isFreeDelivery ? 'Free' : `+₹${totalDeliveryCharge}`}
        </span>
      </div>
      <div className='flex m-2 p-2 justify-between border-t border-gray-200 mt-4 pt-2'>
        <span className='font-bold text-lg'>Total Amount</span>
        <span className='font-bold text-lg'>₹{finalPrice}</span>
      </div>
      <div className='m-2 p-2 text-center'>
        <span className=' text-sm text-gray-600 italic'> ** you will save ₹{discountPrice} on this order ** </span>
      </div>
      <div className='justify-center flex'>
        <button className='p-2 rounded-md bg-blue-400 font-normal text-white w-[400px] hover:bg-blue-500 transition-transform text-lg' onClick={handleCheckout}>Place Order </button>
      </div>
    </div>
  );
};
