import React from 'react'
import openApp from './openApp'

export default function PlansGlobal() {
    return (
        <div className="relative">

            <div aria-hidden="true" className="flex -z-[1] absolute -top-48 start-0">
                <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20">
                </div>
                <div
                    className="bg-gray-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-neutral-800/60">
                </div>
            </div>


            <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">

                <div className="max-w-2xl mx-auto text-center mb-1">
                    <h2
                        className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-transparent">
                        Preços simples e transparentes</h2>
                    <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
                        junte-se às centenas de profissionais que já utilizam o fonotherapp para conquistar melhores resultados na terapia fonoaudiológica.
                    </p>
                </div>



                <div className="flex justify-center items-center">
                    <span>
                        Selecione um Plano
                    </span>
                </div>



                <div
                    className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">

                    <div
                        className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Free</h4>
                        <span
                            className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">Free</span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Get started with basic features</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    1 user
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <button className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-cyan-600 text-cyan-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                        >
                            Iniciar
                        </button>
                    </div>

                    <div
                        className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700">
                        <p className="mb-2"><span
                            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
                            Mais popular
                        </span></p>
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Startup</h4>
                        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                            $39
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">All the basics for starting a new business
                        </p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    2 users
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <a onClick={openApp} className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-cyan-500 text-white hover:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"
                            href="fonotherapp://">
                            Iniciar
                        </a>
                    </div>



                    <div
                        className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Team</h4>
                        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                            $89
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Everything you need for a growing business
                        </p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    5 users
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <button className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-cyan-600 text-cyan-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                        >
                            Iniciar
                        </button>
                    </div>



                    <div
                        className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">Enterprise</h4>
                        <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                            $149
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">Advanced features for scaling your
                            business</p>

                        <ul className="mt-7 space-y-2.5 text-sm">
                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    10 users
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Plan features
                                </span>
                            </li>

                            <li className="flex space-x-2">
                                <svg className="flex-shrink-0 mt-0.5 size-4 text-violet-900" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span className="text-gray-800 dark:text-neutral-400">
                                    Product support
                                </span>
                            </li>
                        </ul>

                        <button className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-cyan-600 text-cyan-600 hover:border-violet-500 hover:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400"
                        >
                            Iniciar
                        </button>
                    </div>

                </div>


                <div className="max-w-2xl mx-auto text-center mb-0 lg:mb-0 mt-14">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Nossa liderança</h2>
                    <p className="mt-1 text-gray-600 dark:text-neutral-400">Time</p>
                </div>

            </div>

            <div
                className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full dark:border-violet-900/60">
            </div>
            <div
                className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60">
            </div>
            <div
                className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60">
            </div>
            <div
                className="absolute top-1/2 start-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60">
            </div>
        </div>
    )
}
