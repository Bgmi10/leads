import React from 'react';
import { Checkout } from '../checkout/Checkout';


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
            <Checkout finalPrice={finalPrice}/>
      </div>
    </div>
  );
};
