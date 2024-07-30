import React from 'react'
import PublicLayout from '../templates/PublicLayout'
import { Link } from 'react-router-dom'
import OpenWhatsApp from '../components/OpenWhatsApp'

const HowItWorks = () => {
  return (
    <PublicLayout>
      <OpenWhatsApp />

      <div className="">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-8 lg:pb-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-gray-900 font-semibold text-2xl md:text-4xl md:leading-tight">
              Nossa Abordagem no Fonotherapp
            </h2>
            <p className="mt-1 text-gray-700">
              Esse profundo insight orienta nossa estratégia abrangente — desde pesquisa meticulosa e planejamento estratégico até a execução perfeita do desenvolvimento do App fonotherapp e implantação do nosso site.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-5 lg:aspect-none">
              <img className="w-full object-cover md:w-auto md:h-[750px] rounded-xl" src={require("../assets/app.gif")} alt="imagem_app" />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-cyan-500 text-xs font-medium uppercase">Steps</h3>
              </div>

              {
                [
                  { id: 1, title: "Crie sessões personalizadas", description: "Personalize sessões de terapia para cada paciente, atribuindo vídeos e exercícios específicos." },
                  { id: 2, title: "Gere relatórios detalhados", description: "Gere relatórios abrangentes sobre o progresso de cada paciente e o desempenho das sessões." },
                  { id: 3, title: "Atualize o sistema de terapia", description: "Implemente novas funcionalidades no sistema de terapia para melhor atender aos pacientes." },
                  { id: 4, title: "Atribua vídeos e exercícios", description: "Atribua vídeos educativos e exercícios práticos para auxiliar no tratamento dos pacientes." }
                ].map(step => (
                  <div className="flex gap-x-5 ms-1" key={step.id}>
                    <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-300">
                      <div className="relative z-10 size-8 flex justify-center items-center">
                        <span className="flex flex-shrink-0 justify-center items-center size-8 border border-gray-300 text-cyan-500 font-semibold text-xs uppercase rounded-full">
                          {step.id}
                        </span>
                      </div>
                    </div>

                    <div className="grow pt-0.5 pb-8 sm:pb-12">
                      <p className="text-sm lg:text-base text-gray-700">
                        <span className="text-gray-900">{step.title}</span> {step.description}
                      </p>
                    </div>
                  </div>
                ))

              }

              <Link to={"/cadastro"} className="group inline-flex items-center gap-x-2 py-2 px-3 bg-cyan-500 font-medium text-sm text-gray-50 rounded-full focus:outline-none">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
                Cadastra-se
              </Link>
            </div>
          </div>
        </div>
      </div>    </PublicLayout>
  )
}

export default HowItWorks
