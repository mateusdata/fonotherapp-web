import React from 'react'
export default function CardsInformationsPlan2() {
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="flex justify-center align-center  flex-col sm:flex-row">

                <div className=" w-full flex items-center justify-center md:max-w-2xl border-0 mx-auto text-center mb-1 h-96">

                    <img className="h-full max-w-full object-cover " src={"https://tagklinik.com.br/wp-content/uploads/2024/02/areas-atuacao-fono.jpg"} alt="description" />

                </div>

                <div className=" w-full h-full flex items-center justify-center md:max-w-2xl border-0 mx-auto text-center mb-1">

                    <div className=''>
                        <span className='sm:text-4xl font-extrabold text-cyan-500'>Como o </span>
                        <span className='sm:text-4xl font-extrabold text-pink-500'>FonotherApp</span>

                        <div>
                            <span className='sm:text-4xl font-extrabold text-cyan-500'> vai te ajudar nos seus</span>
                        </div>
                        <span className='sm:text-4xl font-extrabold text-pink-500'>objetivos?</span>

                        <div className='flex flex-col'>
                            <span className='sm:text-1xl pb-12'>
                                Com esse aplicativo você pode registrar e acompanhar
                                a evolução do quadro clínico/fonoaudiológico,
                                permitindo a avaliação contínua do paciente.
                            </span>

                            <span className='sm:text-1xl pb-12'>

                                Você ainda vai dispor de vídeos e orientações sobre
                                exercícios que podem melhorar a musculatura envolvida
                                na deglutição, motricidade orofacial e paralisia facial.

                            </span>


                            <span className='sm:text-1xl pb-12'>
                                Com todas as suas funcionalidades, este aplicativo pode
                                revolucionar a sua rotina de atendimentos trazendo
                                otimização do tempo e simplificando processos!
                            </span>

                            <button>

                                Quer saber como ele funciona na prática?

                                Clique aqui e faça o cadastro no Plano Gratuito!
                            </button>

                        </div>
                    </div>

                </div>



            </div>
        </div>

    )
}
