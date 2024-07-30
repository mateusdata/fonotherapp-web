import AllRoutes from "./routes/Routes";
import { IoLogoWhatsapp } from "react-icons/io";
import 'animate.css';
import { Tooltip } from "antd";
import { useContext } from "react";
import { ContextAuth } from "./context/AuthProvider";
import { useUserStore } from "./context/Zcontext";

export default function App() {
  const { user } = useContext(ContextAuth)
  const { users, setUsers } = useUserStore();
  function openUrl() {
    const url = `https://wa.me/5575999787828?text=Olá,%20tudo%20bem?%20vi%20o%20site%20https://www.fonotherapp.com.br/%20e%20fiquei%20curioso%20para%20saber%20mais%20sobre%20como%20o%20aplicativo%20funciona.%20Poderiam%20me%20enviar%20mais%20informa%C3%A7%C3%B5es%3F`
    //window.open(url, "_blank")
    const n = Math.floor(Math.random() * 500)
    setUsers({name:"João", email:"teste"+n})
  }

  return (
    <>
      {!user && <div onClick={openUrl} className="fixed right-0 bottom-0 m-6 animate-pulse md:m-12 cursor-pointer ">
        <Tooltip color="#22C35D" title="Ficou com alguma dúvida? entre em contato conosco." >
          <IoLogoWhatsapp className="text-green-500  animate__animated animate__slideInUp" size={60} />
        </Tooltip>
        {JSON.stringify(users)}
      </div>}
      <AllRoutes />
    </>
  )
}