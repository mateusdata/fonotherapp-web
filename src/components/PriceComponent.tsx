import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../axiosInstance/axiosInstance';
import { ContextAuth } from '../context/AuthProvider';



const PriceComponent = () => {
  const [plans, setPlans] = useState<Array<any>>([]);
  const navigate = useNavigate();
  const { user } = useContext(ContextAuth)

  const listPlans = useCallback(() => {
    api.get('list-plans').then((response: any) => {
      setPlans(response.data);
    })
  }, []);

  const checkout = (priceId: string) => {
    if (user?.nick_name) {
      return navigate("/checkout", { state: { email: user?.email, priceId } });
    }
    navigate("/login")
  }

  useEffect(() => {
    listPlans();
  }, []);



  console.log(plans);

  return (

    <>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-1">
          <h2
            className="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-cyan-600 to-fuchsia-700 text-transparent">
            Preços simples e transparentes</h2>

        </div>



        <div className="flex justify-center items-center">
          <span>
            Selecione um Plano
          </span>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center lg:flex lg:px-5 lg:py-0">


          {plans?.map((plan) => {
            return (
              <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 md:p-4 dark:border-blue-700">
                <p className="mb-3"><span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">{plan.product.name}</h4>
                <span className="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200 gap-x-3">
                  <span className="font-bold text-2xl -me-2">R$</span>
                  {plan.unit_amount / 100}
                </span>
                <p className="mt-2 text-sm text-gray-500">{plan?.product?.description}</p>

                <ul className="mt-7 space-y-2.5 text-sm">
                  {plan?.product?.features?.map((feature: any) => {
                    return (<li className="flex space-x-2">
                      <svg className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                      <span className="text-gray-800 dark:text-gray-400">
                        {feature?.name}
                      </span>
                    </li>);
                  })}
                </ul>
                <button onClick={() => checkout(plan.id)}>
                  <a className="mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    Assinar
                  </a>
                </button>
              </div>);
          })}

        </div>
        <p className="text-center mt-12 lg:text-lg text-gray-800 dark:text-neutral-200">
          junte-se às centenas de profissionais que já utilizam o fonotherapp para conquistar melhores resultados na terapia fonoaudiológica.
        </p>
      </div>

    </>
  )
}

export default PriceComponent
