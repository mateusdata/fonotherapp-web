import React, { useContext } from 'react'
import ApresentationDoctor from '../components/ApresentationDoctor'
import CardsInformationsPlan from '../components/CardsInformationsPlan'
import ApresentationManagers from '../components/ApresentationManagers'
import { Link } from 'react-router-dom'
import PublicLayout from '../templates/PublicLayout'
import { ContextAuth } from '../context/AuthProvider'

import OpenWhatsApp from '../components/OpenWhatsApp'

const Home = () => {
  const { user } = useContext(ContextAuth)
  return (
    <PublicLayout>
      <div className="border-0 border-red-600">

        <div className="max-w-[85rem] flex px-4 md:flex-row flex-col pt-10 sm:px-6 lg:px-8  mx-auto">

          <div className="max-w-2xl border-0 border-red-600 mx-auto text-center mb-1 h-96">
            <h2
              className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-transparent">
              A FONOAUDIOLOGIA NA PALMA DA SUA MÃO
            </h2>
            <p className="mt-2 md:px-24 lg:text-lg text-gray-800 dark:text-neutral-200">
              Automatize a fonoterapia e mantenha seus pacientes sempre motivados e engajados.

            </p>
            <Link to={`${!user ? "/cadastro" : "/meuplano"}`} type="button" className="py-3 mt-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-xl border border-transparent bg-pink-600 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:pointer-events-none">
              {!user ? "Cadastra-se" : "Baixe nosso app"}
            </Link>

          </div>

          <div className=" w-full flex items-center justify-center md:max-w-2xl border-0 border-red-600 mx-auto text-center mb-1 h-96">

            <img className="h-full max-w-full object-cover " src="data:image/jpeg;base64,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" alt="description"/>

          </div>

        </div>
      </div>
      <CardsInformationsPlan />
      <ApresentationManagers />
      <ApresentationDoctor />
      <OpenWhatsApp />
    </PublicLayout>
  )
}

export default Home
