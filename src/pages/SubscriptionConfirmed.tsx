import React, { useContext, useEffect } from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../context/AuthProvider';
import PublicLayout from '../templates/PublicLayout';
import { api } from '../axiosInstance/axiosInstance';
import { ThermometerSnowflake } from 'lucide-react';
///Fonotherapp
const SubscriptionConfirmed = () => {
    const { user } = useContext(ContextAuth);
    const isPlan = user?.activePlan ? true : false;
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
                            <CheckCircleOutlined style={{ color: "green", fontSize: '46px' }} />

                            <p className="text-sm text-gray-600 mt-2">
                                Você pode baixar o aplicativo Fonotherapp no link{' '}
                                <a href="https://www.fonotherapp.com.br/download" className="text-cyan-600 hover:underline">
                                https://www.fonotherapp.com.br/download
                                </a>
                            </p>
                            <Button type="primary" className="mt-4" onClick={managePlans}>
                                Gerenciar plano
                            </Button>
                        </div>
                    ) : (
                        <div className="text-center flex flex-col justify-center  items-center  mb-6">
                            <NotificationOutlined style={{ color: "red", fontSize: '46px' }} />

                            <p className="text-lg text-gray-700">
                                Você ainda não tem um plano

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
