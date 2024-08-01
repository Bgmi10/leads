import React, { useState } from 'react';
import './Hamburger.css';

export const Mobilenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cursor-pointer lg:hidden" onClick={handleToggle}>
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
        <div className="line top"></div>
        <div className="line middle"></div>
        <div className="line bottom"></div>
      </div>
      <div
        className={`menu ${isOpen ? 'menu-enter menu-enter-active' : 'menu-exit menu-exit-active'}`}
      >
        {isOpen && (
          <>
            <span>Shop</span>
            <span>Learn</span>
            <span>Bulk Order</span>
            <span>Recipes</span>
            <span>Track My Order</span>
            <span>About us</span>
            <span>Contact us</span>
            
          </>
        )}
      </div>
    </div>
  );
};
