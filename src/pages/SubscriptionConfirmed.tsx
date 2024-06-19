import React, { useContext } from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { ContextAuth } from '../context/AuthProvider';
import PublicLayout from '../templates/PublicLayout';

const SubscriptionConfirmed = () => {
    const { user } = useContext(ContextAuth);
    const isPlan = user?.nick_name ? true : false;
    const navigate = useNavigate();

    const handleChoosePlan = () => {
        navigate('/painel');
    };

    return (
        <PublicLayout>
            <div className="flex flex-col items-center justify-center h-screen ">
                <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Assinatura Não Confirmada</h1>

                    {isPlan ? (
                        <div className="text-center mb-6">
                            <p className="text-lg text-gray-700">
                                Parabéns você pode testar o app, {user?.nick_name}! Seu plano não está ativo, Mas você pode testa-lo
                            </p>
                            <p className="text-sm text-gray-600 mt-2">
                                Você pode baixar o aplicativo Fonotherapp no link{' '}
                                <a href="https://expo.dev/artifacts/eas/orchbRQN5xt8qRF5eibMmR.apk" className="text-cyan-600 hover:underline">
                                fonotherapp.vercel.app/downloadapp
                                
                                </a>
                            </p>
                            <Button
                                type="primary"
                                className="mt-4"
                                icon={<DownloadOutlined />}
                                href="https://expo.dev/artifacts/eas/orchbRQN5xt8qRF5eibMmR.apk"
                                target="_blank"
                            >
                                Baixar o Aplicativo
                            </Button>
                        </div>
                    ) : (
                        <div className="text-center mb-6">
                            <p className="text-lg text-gray-700">
                                Você não tem um plano ativo no momento.
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
