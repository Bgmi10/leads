import React from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './Productoverview.css'; // Import the CSS file for styling

export const Productoverview = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="py-5 m-4  ">
        <Breadcrumbs />
        <div className="py-2">
          <span className="font-bold text-2xl text-gray-800">{data?.data?.attributes?.name}</span>
        </div>
        <div className="flex items-center py-2">
          <span className="font-semibold text-2xl ">₹{data?.data?.attributes?.price}</span>
          <span className="ml-2 text-gray-500 text-base line-through ">₹{data?.data?.attributes?.actualprice}</span>
          {data?.data?.attributes?.offertag && (
            <div className="ml-3  px-2 bg-green-100 text-green-700 rounded-md flex items-center offer-shimmer ">
              <LocalOfferIcon className="mr-1 text-green-600" />
              <span className="text-sm ">{data?.data?.attributes?.offertag}% off</span>
            </div>
          )}
        </div>
        <div className="mt-4 text-gray-600 text-base">
          <p>{/* Additional product details or description here */}</p>
        </div>
      </div>
    </>
  );
};
