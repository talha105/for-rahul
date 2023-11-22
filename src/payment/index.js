// index.js
import React from 'react';
import {StripeProvider} from 'react-stripe-elements';
 
import MyStoreCheckout from './MyStoreCheckout';
 
const Payment = () => {
  return (
    <StripeProvider apiKey="pk_test_51OD5oiDJPxUHvHB4BzSFnD1Af8GmvT33QORJJtFf13geZjjUFCTcpJcLqiJ8g4HNHSdMT2INNcW8sICBC7ad24yI00Lpor1crr">
      <MyStoreCheckout />
    </StripeProvider>
  );
};

export default Payment