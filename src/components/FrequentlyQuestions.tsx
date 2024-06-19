import React from 'react'

export default function FrequentlyQuestions() {
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

            <div className="grid md:grid-cols-5 gap-10">
                <div className="md:col-span-2">
                    <div className="max-w-xs">
                        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Frequently <br /> asked
                            questions</h2>
                        <p className="mt-1 hidden md:block text-gray-600 dark:text-neutral-400">Answers to the most frequently asked
                            questions.</p>
                    </div>
                </div>


                <div className="md:col-span-3">

                    <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                        <div className="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                Gestão de Pacientes
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <p className="text-gray-600 dark:text-neutral-400">
                                Gerencie facilmente os dados de seus pacientes com nosso app intuitivo e seguro.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                               Adição de Exercícios
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                                <p className="text-gray-600 dark:text-neutral-400">
                                Adicione e personalize exercícios para cada paciente com apenas alguns cliques
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                             Geração de Relatórios
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                                <p className="text-gray-600 dark:text-neutral-400">
                                Crie relatórios detalhados sobre o progresso dos pacientes de forma rápida e eficiente
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                               Monitoramento
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                                <p className="text-gray-600 dark:text-neutral-400">
                                Acompanhe o progresso dos exercícios dos pacientes em tempo real diretamente pelo app
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                               Biblioteca de Recursos
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                                <p className="text-gray-600 dark:text-neutral-400">
                                Utilize uma vasta biblioteca de recursos e materiais para apoiar o tratamento dos pacientes.
                                </p>
                            </div>
                        </div>

                        <div className="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                            <button
                                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
                                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                                Upgrade License Type
                                <svg
                                    className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                                <svg
                                    className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                                <p className="text-gray-600 dark:text-neutral-400">
                                    There may be times when you need to upgrade your license from the original type you purchased and we
                                    have a solution that ensures you can apply your original purchase cost to the new license purchase.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
