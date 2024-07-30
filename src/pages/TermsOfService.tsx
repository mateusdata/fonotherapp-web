import React from 'react';
import PublicLayout from '../templates/PublicLayout';

function TermsOfService() {
    return (
        <PublicLayout>
            <div className="min-h-screen p-6">
                <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-4">Termos de Serviço</h1>
                    <p className="mb-4 text-lg">
                        Bem-vindo ao nosso aplicativo de fonoaudiologia. Ao usar este aplicativo, você concorda com os seguintes termos e condições:
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. Coleta e Uso de Dados</h2>
                    <p className="mb-4 text-lg">
                        Coletamos dados pessoais para gerenciar pacientes e oferecer um serviço de fonoaudiologia eficiente. Os dados são armazenados de forma segura em nosso banco de dados e não são disponibilizados para terceiros. A coleta inclui informações de contato, histórico médico e localização, se necessário para o atendimento.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. Proteção de Dados</h2>
                    <p className="mb-4 text-lg">
                        Implementamos medidas de segurança rigorosas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Apenas funcionários autorizados têm acesso a informações sensíveis.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. Uso da Localização</h2>
                    <p className="mb-4 text-lg">
                        O aplicativo pode acessar sua localização para fornecer serviços personalizados e suporte ao paciente. As informações de localização são usadas exclusivamente para fins relacionados ao serviço e não são compartilhadas com terceiros.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. Alterações aos Termos</h2>
                    <p className="mb-4 text-lg">
                        Podemos atualizar estes termos de serviço ocasionalmente. As alterações serão publicadas nesta página e você será notificado sobre quaisquer mudanças importantes. O uso contínuo do aplicativo após as modificações indica sua aceitação dos novos termos.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. Contato</h2>
                    <p className="mb-4 text-lg">
                        Se você tiver dúvidas sobre estes termos de serviço, entre em contato conosco pelo e-mail [seu-email@example.com].
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}

export default TermsOfService;
