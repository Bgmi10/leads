import React from 'react';


export const CartInvoice = ({ items }) => {
  
  const totalPrice = items.reduce((acc, item) => acc + item.attributes.price, 0) * items?.[0].quantity;
  const originalPrice = items.reduce((acc, item) => acc + item.attributes.actualprice, 0) * items?.[0].quantity
  const totalDeliveryCharge = items.reduce((acc, item) => acc + item.attributes.deliveryCharges, 0);
  const discountPrice = originalPrice - totalPrice;

  let finalPrice = originalPrice - discountPrice;

  const isFreeDelivery = finalPrice >= 700;
  if (!isFreeDelivery) {
    finalPrice += totalDeliveryCharge;
  }

  return (
    <div className='w-96 h-72 border m-10 bg-gray-100 p-4 rounded-lg shadow-md'>
      <div className='border-b p-2'>
        <span className='mt-4 font-normal text-lg'>Price Detail</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Price ({items.length} items)</span>
        <span>₹{originalPrice}</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Discount</span>
        <span className='text-red-400'>- ₹{discountPrice}</span>
      </div>
      <div className='flex m-2 p-2 justify-between'>
        <span className='font-normal text-md'>Delivery Charges</span>
        <span className={isFreeDelivery ? 'text-green-400' : 'text-green-400'}>
          {isFreeDelivery ? 'Free' : `+₹${totalDeliveryCharge}`}
        </span>
      </div>
      <div className='flex m-2 p-2 justify-between border-t border-gray-200 mt-4 pt-2'>
        <span className='font-bold text-lg'>Total Amount</span>
        <span className='font-bold text-lg'>₹{finalPrice}</span>
      </div>
    </div>
  );
};
