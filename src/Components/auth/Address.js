import React, { useState } from 'react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validateaddresss } from '../../utils/validateaddress';
import { toast } from 'react-toastify';
import { Addressform } from './Addressform';
import { baseurl, token } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { Fetchaddress } from './Fetchaddress';

export const Address = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  const userid = useSelector(store => store.auth.user.id);
  const { Number, Pincode } = validateaddresss(number, pincode);

  const handleFormSubmit = async () => { 
    if (!Number) {
      toast.error('Please provide a valid mobile number');
      return;
    }

    if (!address) {
      toast.error('Address is a required field');
      return;
    }
    
    if (!locality) {
      toast.error('Locality is a required field');
      return;
    }

    if (!city) {
      toast.error('City is a required field');
      return;
    }

    if (!state) {
      toast.error('District is a required field');
      return;
    }

    if (!Pincode) {
      toast.error('Pincode is not valid');
      return;
    }

    await postAddress();
  };

  const postAddress = async () => {
    try {
      const res = await fetch(`${baseurl}/api/addresses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          data: {
            userid: userid,
            name: name,
            mobilenumber: number,
            address: address,
            pincode: pincode,
            locality: locality,
            city: city,
            state: state
          },
          user: userid
        })
      });

      if (res.ok) {
        toast.success('Address added successfully');
        setIsOpen(false);
        // Optionally, refresh the address list or reset the form fields here
      } else {
        toast.error('Failed to add address');
      }
    } catch (err) {
      console.error('Error:', err);
      toast.error('An error occurred while adding the address');
    }
  };

  return (
    <>
      <div className='bg-white m-7 rounded-lg shadow-lg p-6 mx-4'>
        <button className='bg-blue-500 p-2 m-2 hover:bg-blue-600 text-white' onClick={() => setIsOpen(true)}>
          Add New Address
        </button>
        <div className='flex justify-end '>
        <span className='text-gray-400 font-normal'>Note : Product will be deliver to selected address </span>
        </div>
        <Fetchaddress />
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-black opacity-65 w-full h-full absolute"></div>
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto z-10">
            <div className='flex justify-end m-1'>
              <FontAwesomeIcon icon={faClose} className='text-xl cursor-pointer' onClick={() => setIsOpen(false)} />
            </div>
            <Addressform
              name={name}
              mobilenumber={number}
              address={address}
              pincode={pincode}
              locality={locality}
              city={city}
              state={state}
              statesOptions={['State 1', 'State 2', 'State 3']} // Example state options
              onNameChange={setName}
              onNumberChange={setNumber}
              onAddressChange={setAddress}
              onPincodeChange={setPincode}
              onLocalityChange={setLocality}
              onCityChange={setCity}
              onStateChange={setState}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </>
  );
};
