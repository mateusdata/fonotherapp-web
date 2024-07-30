import React, { useContext } from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../context/AuthProvider';
import PublicLayout from '../templates/PublicLayout';
import { api } from '../axiosInstance/axiosInstance';
///Fonotherapp
const SubscriptionConfirmed = () => {
    const { user } = useContext(ContextAuth);
    const isPlan = user?.nick_name ? true : false;
    const navigate = useNavigate();

    const handleChoosePlan = () => {
        navigate('/painel');
    };

    async function managePlans() {
        try {
            const response = await api.post("/manage-plan", {
                usu_id: user?.usu_id
            });
            console.log(response?.data);
            window.location.replace(response?.data?.redirect_url)
        } catch (error) {
            alert("Erro ao gerenciar plano");
        }
    }

    return (
        <PublicLayout>
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Assinatura  Confirmada</h1>

                    {isPlan ? (
                        <div className="text-center mb-6">
                            <CheckCircleOutlined style={{color:"green", fontSize: '46px'}} />

                            <p className="text-sm text-gray-600 mt-2">
                                Você pode baixar o aplicativo Fonotherapp no link{' '}
                                <a href="https://expo.dev/artifacts/eas/orchbRQN5xt8qRF5eibMmR.apk" className="text-cyan-600 hover:underline">
                                    fonotherapp.vercel.app/downloadapp
                                </a>
                            </p>
                            <Button type="primary" className="mt-4" onClick={managePlans}>
                                Gerenciar plano
                            </Button>
                        </div>
                    ) : (
                        <div className="text-center mb-6">
                            <p className="text-lg text-gray-700">
                              Seu planp está plano ativo.
                            </p>
                            <Button type="primary" className="mt-4" onClick={handleChoosePlan}>
                                Escolher um Plano
                            </Button>
                        </div>
                    )}
                </div>

            </div>
        </PublicLayout>
    );
};

export default SubscriptionConfirmed;
