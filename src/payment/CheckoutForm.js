// CheckoutForm.js
import axios from 'axios';
import React from 'react';
import { injectStripe } from 'react-stripe-elements';
// import AddressSection from './AddressSection';
import CardSection from './CardSection';

class CheckoutForm extends React.Component {
    handleSubmit = (ev) => {
        ev.preventDefault();
        const cardElement = this.props.elements.getElement('card');
        axios.post('http://172.16.1.58:3000/createpaymentmethod', { amount: 60 })
            .then(res => {
                const id = res?.data?.result?.client_secret

                this.props.stripe.confirmCardPayment(id, {
                    payment_method: {
                        card: cardElement,
                    },
                });
            })
    };

    paypalPayment=()=>{
        axios.post('http://172.16.1.58:3000/createpaymentmethod', { amount: 60 })
        .then(async res => {
            // const id = res?.data?.result?.client_secret
            console.log("log",res?.data)
            // const {error} = await this.props.stripe.confirmPayPalSetup(
            //     '{{SETUP_INTENT_CLIENT_SECRET}}',
            //     {
            //       return_url: 'https://example.com/setup/complete',
            //       mandate_data: {
            //         customer_acceptance: {
            //           type: 'online',
            //           online: {
            //               infer_from_client: true
            //           }
            //         }
            //       },
            //     }
            //   );
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    {/* <AddressSection /> */}
                    <CardSection />
                    <button>Confirm order</button>
                    <button onClick={this.paypalPayment}>paypal</button>

                </form>
            </>
        );
    }
}

export default injectStripe(CheckoutForm);