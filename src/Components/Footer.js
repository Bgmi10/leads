import React from 'react';
import { header_logo } from '../utils/constants';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import TextRunner from './Textrunner';

export const Footer = () => {
  return (
    <footer className='bg-gray-100 text-gray-700 py-8'>
     <TextRunner  text="Cook like a pro with our top-quality oils. Fresh, flavorful, and delivered right to your kitchen—because every meal deserves the best."  duration={40} />
      <div className='container mx-auto px-4 py-3'>
      
        {/* Footer Layout for Large Devices */}
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8'>
          {/* Logo and Social Media Icons */}
          <div className='flex flex-col items-center lg:items-start'>
            <img src={header_logo} alt='Company Logo' className='h-20 w-20 mb-4 ml-7' />
            <div className='flex space-x-4'>
              <InstagramIcon fontSize='large' color='warning' className='hover:scale-105 cursor-pointer transition-transform duration-200' />
              <WhatsAppIcon fontSize='large' color='success' className='hover:scale-105 cursor-pointer transition-transform duration-200' />
              <FacebookIcon fontSize='large' color='primary' className='hover:scale-105 cursor-pointer transition-transform duration-200' />
            </div>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col items-center lg:items-start'>
            <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
            <div className='flex items-center mb-2'>
              <PhoneInTalkIcon className='mr-2' />
              <span>+91 9176745857</span>
            </div>
            <div className='flex items-center'>
              <MailOutlineIcon className='mr-2' />
              <span>info@example.com</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-col items-center lg:items-start'>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <a href='/privacy-policy' className='text-gray-600 hover:text-gray-800 mb-2'>Privacy Policy</a>
            <a href='/terms-of-service' className='text-gray-600 hover:text-gray-800 mb-2'>Terms of Service</a>
            <a href='/about-us' className='text-gray-600 hover:text-gray-800'>About Us</a>
          </div>

          {/* Newsletter Signup */}
          <div className='flex flex-col items-center lg:items-start'>
            <h3 className='text-lg font-semibold mb-4'>Subscribe</h3>
            <form className='flex flex-col items-center lg:items-start'>
              <input type='email' placeholder='Your email address' className='p-2 border border-gray-300 rounded-l-md outline-none mb-4' />
              <button type='submit' className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors duration-200'>Subscribe</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className='text-center text-gray-500'>
          <p>&copy; 2024 Leads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
