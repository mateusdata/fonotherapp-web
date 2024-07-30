import { Tooltip } from 'antd';
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { openUrl } from '../utils/helpPlan';

export default function OpenWhatsApp() {
  return (

      <div onClick={openUrl} className="fixed right-0 bottom-0 m-6 animate-pulse md:m-12 cursor-pointer ">
        <Tooltip color="#22C35D" title="Ficou com alguma dúvida? entre em contato conosco." >
          <IoLogoWhatsapp className="text-green-500  animate__animated animate__slideInUp" size={60} />
        </Tooltip>
      </div>
  )
}
