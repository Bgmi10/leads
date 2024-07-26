// CheckoutForm.jsx
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export const Checkoutform = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      // Handle the payment method here, e.g., send it to your server
      // For example:
      // const response = await fetch('/create-payment-intent', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: totalPrice }),
      // });
      // const paymentIntent = await response.json();
      // // Confirm the payment on the client
      // const { error: confirmError } = await stripe.confirmCardPayment(paymentIntent.client_secret);
      // if (confirmError) console.log('[confirmError]', confirmError);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ₹{totalPrice}
      </button>
    </form>
  );
};
