import React, { useContext } from 'react'
import ApresentationDoctor from '../components/ApresentationDoctor'
import CardsInformationsPlan from '../components/CardsInformationsPlan'
import ApresentationManagers from '../components/ApresentationManagers'
import { Link } from 'react-router-dom'
import PublicLayout from '../templates/PublicLayout'
import { ContextAuth } from '../context/AuthProvider'
import preLogin from "../assets/prelogin.png"
import OpenWhatsApp from '../components/OpenWhatsApp'
import CardsInformationsPlan2 from '../components/CardsInformationsPlan2'

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

            <img className="h-full max-w-full object-cover " src={preLogin} alt="description"/>

          </div>

        </div>
      </div>

      <CardsInformationsPlan2 />

      <CardsInformationsPlan />

      <ApresentationManagers />
      <ApresentationDoctor />
      <OpenWhatsApp />
    </PublicLayout>
  )
}

export default Home
