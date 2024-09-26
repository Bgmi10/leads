import React from 'react';
import { baseurl, token } from '../../utils/constants';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

export const Checkout = ({ finalPrice }) => {
    
    const userdata = useSelector(store => store.auth.user)
    console.log(userdata)
    const handlePayment = async () => {
        const amount = finalPrice; 
        const firstname = userdata.username; 
        const email = userdata.email; 
        const phone = '7845442450'; 

        try {
            const res = await fetch(`${baseurl}/api/payments`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    amount: amount.toFixed(2), 
                    firstname: firstname,
                    email: email,
                    phone: phone,
                }),
            });

            if (res.ok) {
                const { paymentData } = await res.json();

                // Redirect to PayU payment page
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = 'https://test.payu.in/_payment';

                // Append each required field to the form
                Object.keys(paymentData).forEach(key => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = paymentData[key];
                    form.appendChild(input);
                });

                document.body.appendChild(form);
                form.submit();

                toast.success('Payment process initiated!');
            } else {
                toast.error('Something went wrong while creating the payment.');
            }
        } catch (err) {
            console.error(err);
            toast.error('An error occurred during payment processing.');
        }
    };

    return (
        <div>
            <button 
                className='p-2 rounded-md bg-blue-400 font-normal text-white w-[300px] hover:bg-blue-500 transition-transform text-lg' 
                onClick={handlePayment}
            >
                Place Order
            </button>
        </div>
    );
};
