import React, { useContext, useState } from 'react';
import { ContextAuth } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
function GlobalLayout({ children }: any) {
  const [showMenu, setShowMenu] = useState(false);
  const { currentPage, setCurrentPage } = useContext(ContextAuth)


  return (
    <div className="bg-gray-50 text-white dark:bg-slate-900 flex min-h-screen w-full">
      <div className="w-full flex flex-col mx-auto ">
        <header className=" bg-cyan-500 flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm">
          <nav className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold dark:text-white text-white md:px-20  focus:ring- hidden sm:block" href="#" aria-label="Brand"> Fonotheapp
              </a>
              <a className="flex-none text-xl font-semibold dark:text-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600 sm:hidden" href="#" aria-label="Brand">Fonotheapp</a>
              <div className="sm:hidden">

                <button onClick={() => setShowMenu(!showMenu)} type="button" className=" p-2 inline-flex justify-center items-center gap-2 rounded-lg border border-gray-100 hover:border-gray-200 font-medium text-gray-300 text:black shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                  <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                  <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                  {!showMenu ? "menu": "fechar"}
                </button>
              </div>
            </div>
            <div id="navbar-collapse-with-animation" className={`hs-collapse ${!showMenu && "hidden"} md:px-20 overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <Link to={"/"} onClick={() => setCurrentPage(1)} className={`font-medium ${currentPage === 1 ? "text-white hover:text-gray-50 " : "text-gray-300 hover:text-gray-50"} sm:py-3 sm:text-lg hover:text-gray-50 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `} aria-current="page">Início</Link>
                <Link to={"/como-funciona"} onClick={() => setCurrentPage(2)} className={`font-medium ${currentPage === 2 ? "text-whitesm:text-lg hover:text-gray-50 " : "text-gray-300 hover:text-gray-50"} sm:py-3  hover:text-gray-50 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>Como funciona</Link>
                <Link to={"/preço"} onClick={() => setCurrentPage(3)} className={`font-medium ${currentPage === 3 ? "text-white hover:text-gray-50 " : "text-gray-300 hover:text-gray-50"} sm:py-3  hover:text-gray-50 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>Preços</Link>
                <Link to={"/login"} onClick={() => setCurrentPage(3)} className={`font-medium ${currentPage === 3 ? "text-white hover:text-gray-50 " : "text-gray-300 hover:text-gray-50"} sm:py-3  hover:text-gray-50 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 cursor-pointer `}>Entrar</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>
          <div className="break-words">
            {children}      
          </div>
        </main>
    


        <Footer />


      </div>
    </div>
  );
}
export default GlobalLayout;