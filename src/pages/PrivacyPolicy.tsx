import React from 'react';
import PublicLayout from '../templates/PublicLayout';

function PrivacyPolicy() {
    return (
        <PublicLayout>
            <div className="min-h-screen p-6">
                <div className="max-w-4xl mx-auto shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold mb-4">Política de Privacidade</h1>
                    <p className="mb-4 text-lg">
                        Nossa Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais. Ao usar nosso aplicativo, você concorda com a coleta e uso de informações conforme descrito nesta política.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">1. Informações Coletadas</h2>
                    <p className="mb-4 text-lg">
                        Coletamos informações pessoais identificáveis, como nome, endereço de e-mail e detalhes de contato. Além disso, podemos coletar dados sobre o uso do aplicativo e informações de localização para fornecer serviços personalizados e aprimorar a experiência do usuário.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">2. Uso das Informações</h2>
                    <p className="mb-4 text-lg">
                        As informações coletadas são usadas para fornecer e melhorar nossos serviços, comunicar-se com você e cumprir obrigações legais. Não compartilhamos suas informações pessoais com terceiros sem o seu consentimento, exceto conforme necessário para cumprir a lei ou proteger nossos direitos.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">3. Proteção da Privacidade</h2>
                    <p className="mb-4 text-lg">
                        Tomamos medidas razoáveis para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Utilizamos criptografia e outras tecnologias de segurança para garantir a proteção dos dados.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">4. Seus Direitos</h2>
                    <p className="mb-4 text-lg">
                        Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Se você desejar exercer esses direitos, entre em contato conosco pelo e-mail [seu-email@example.com].
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">5. Alterações à Política de Privacidade</h2>
                    <p className="mb-4 text-lg">
                        Podemos atualizar esta política de privacidade de tempos em tempos. Quaisquer alterações serão publicadas nesta página e a data de revisão será atualizada. Recomendamos que você reveja periodicamente esta política para se manter informado sobre como protegemos suas informações.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contato</h2>
                    <p className="mb-4 text-lg">
                        Se você tiver dúvidas sobre nossa Política de Privacidade, entre em contato conosco pelo e-mail [seu-email@example.com].
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}

export default PrivacyPolicy;
