// Import necessary libraries
import React from 'react';
import Lottie from 'react-lottie';


export  const LottieAnimation = ({gif , height , width}) => {
  // Configuration options for the Lottie animation
  const defaultOptions = {
    
    autoplay: true, // Set to true for automatic play
    animationData: gif,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet' // Scale and align the animation
      },
      
   
  };

  

  return (
    <div className="">
      <Lottie options={defaultOptions} height={height} width={width}  />
    </div>
  );
};
