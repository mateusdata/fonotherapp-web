
import React, { useCallback, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { Navigate, useLocation } from "react-router-dom";

import {api} from '../axiosInstance/axiosInstance';
import PublicLayout from '../templates/PublicLayout';

let stripePromise: any = null;
let clientSecret: string;

const fetchPublisableKey = async () => {
    const response = await api.get('/config');

    stripePromise = loadStripe(response.data.publishable_key);
}

fetchPublisableKey();

const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const sessionId = urlParams.get('session_id');

        api.get(`/session-status?session_id=${sessionId}`).then((response: any) => {
            setStatus(response.data.status);
            setCustomerEmail(response.data.customer_email);
        });

    }, []);

    if (status === 'open') {
        return (
            <Navigate to="/checkout" />
        )
    }

    if (status === 'complete') {
        return (
            <section id="success">
                <p>
                    We appreciate your business! A confirmation email will be sent to {customerEmail}.

                    If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
                </p>
            </section>
        )
    }

    return null;
}



const Checkout = () => {
    const [clientSecret, setClientSecret] = useState<string>("");
    const { state: { email, priceId } } = useLocation();
    //const { state: { email, priceId } } = useLocation()?.state || {};


    const createCheckoutsession = useCallback(async (): Promise<string> => {
        const response = await api.post('/create-checkout-session', { email, priceId });

        return response.data?.client_secret;
    }, []);

    return (
        <PublicLayout>
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={{ fetchClientSecret: createCheckoutsession }}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </PublicLayout>
    )
};

export default Checkout;