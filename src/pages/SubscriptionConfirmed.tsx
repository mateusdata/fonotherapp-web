import React, { useContext } from 'react';
import { Button } from 'antd';
import { CheckCircleOutlined, NotificationOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../context/AuthProvider';
import PublicLayout from '../templates/PublicLayout';
import { api } from '../axiosInstance/axiosInstance';
///Fonotherapp
const SubscriptionConfirmed = () => {
    const { user } = useContext(ContextAuth);
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

                    {user?.has_plan ? (
                        <div className="text-center mb-6">
                            <CheckCircleOutlined style={{ color: "green", fontSize: '46px' }} />

                            <div>
                                <p className="text-sm text-gray-600 mt-2">
                                    Você pode baixar o aplicativo Fonotherapp no link{' '}
                                </p>
                                <a  className='w-full mt-6 flex items-end justify-center' href="https://play.google.com/store/apps/details?id=com.projetofono.fonotherapp">
                                    <img
                                        className='h-12'
                                        src="data:image/png;base64,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" alt=""
                                    />
                                </a>
                                <div>

                                </div>
                            </div>
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
