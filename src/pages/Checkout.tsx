import React, { useCallback, useEffect, useState } from 'react';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from "react-router-dom";
import {api} from '../axiosInstance/axiosInstance';
import PublicLayout from '../templates/PublicLayout';

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState<string>("");
    const [stripePromise, setStripePromise] = useState<any>(undefined);
    const { state: { email, priceId } } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPublishableKey = async () => {
            const response = await api.get('/config');
            return response.data.publishable_key;
        };

        const initializeStripe = async () => {
            const publishableKey = await fetchPublishableKey();
            const stripe = await loadStripe(publishableKey);
            setStripePromise(() => Promise.resolve(stripe));
        };

        initializeStripe();
    }, []);

    const createCheckoutsession = useCallback(async (): Promise<string> => {
        try {
            const response = await api.post('/create-checkout-session', { email, priceId });
            if (!response.data?.client_secret) {
                navigate("/painel");
                return '';
            }
            setClientSecret(response.data.client_secret);
            return response.data.client_secret;
        } catch (error) {
            console.error('Erro ao criar a sessão de checkout:', error);
            alert('Ocorreu um erro ao criar a sessão de checkout. Por favor, tente novamente.');
            return '';
        }
    }, [email, priceId, navigate]);

    useEffect(() => {
        if (clientSecret) {
            //  alert(clientSecret);
        }
    }, [clientSecret]);

    if (!stripePromise) {
        return null; // Ou algum indicador de carregamento enquanto o Stripe está sendo inicializado
    }

    return (
        <PublicLayout>
            <div className='min-h-screen'>
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ fetchClientSecret: createCheckoutsession }}
                >
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            </div>  
        </PublicLayout>
    );
};

export default Checkout;
