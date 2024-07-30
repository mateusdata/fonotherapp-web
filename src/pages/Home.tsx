import React, { useContext } from 'react'
import ApresentationDoctor from '../components/ApresentationDoctor'
import CardsInformationsPlan from '../components/CardsInformationsPlan'
import ApresentationManagers from '../components/ApresentationManagers'
import { Link } from 'react-router-dom'
import PublicLayout from '../templates/PublicLayout'
import { ContextAuth } from '../context/AuthProvider'
import { openUrl } from '../utils/helpPlan'
import { Tooltip } from 'antd'
import OpenWhatsApp from '../components/OpenWhatsApp'

const Home = () => {
  const {user}  = useContext(ContextAuth)
  return (
    <PublicLayout>
      <div className="">
        
        <div className="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">

          <div className="max-w-2xl mx-auto text-center mb-1 ">
            <h2
              className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-transparent">
              O consultório é apenas o começo da jornada</h2>
            <p className="mt-2 md:px-24 lg:text-lg text-gray-800 dark:text-neutral-200">
              Automatize a fonoterapia e mantenha seus pacientes sempre motivados e engajados.

            </p>
            <Link  to={`${!user? "/cadastro": "/meuplano"}`} type="button" className="py-3 mt-2 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-green-500 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:pointer-events-none">
            { !user ? "Cadastre-se agora": "Baixe nosso app"}
            </Link>

          </div>

        </div>
      </div>
      <CardsInformationsPlan/>
      <ApresentationManagers/>
      <ApresentationDoctor/>
     <OpenWhatsApp />
    </PublicLayout>
  )
}

export default Home
