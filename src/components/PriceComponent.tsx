import React, { useCallback, useEffect, useState } from 'react'
import axiosInstance from '../axiosInstance/axiosInstance';
import { useNavigate } from 'react-router-dom';



const PriceComponent = () => {
  const [plans, setPlans] = useState<Array<any>>([]);
  const navigate = useNavigate();

  const listPlans = useCallback(() => {
    axiosInstance.get('list-plans').then((response: any) => {
      setPlans(response.data);
    })
  }, []);

  const checkout = (priceId: string) => {
   
    navigate("/checkout", { state: { email: `fono${parseInt(Number(Math.random()*10000).toString())}@gmail.com`, priceId } });
  }

  useEffect(() => {
    listPlans();
  }, []);



  console.log(plans);

  return (

    <>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">Whatever your status, our offers evolve according to your needs.</p>
        </div>



        <div className="flex justify-center items-center">
          <label className="min-w-14 text-sm text-gray-500 me-3 dark:text-gray-400">Monthly</label>

          <input type="checkbox" id="hs-basic-with-description" className="relative w-[3.25rem] h-7 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
  
      before:inline-block before:size-6 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-white" />

          <label className="relative min-w-14 text-sm text-gray-500 ms-3 dark:text-gray-400">
            Annual
            <span className="absolute -top-10 start-auto -end-28">
              <span className="flex items-center">
                <svg className="w-14 h-8 -me-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" className="fill-gray-300 dark:fill-gray-700" />
                </svg>
                <span className="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Save up to 10%</span>
              </span>
            </span>
          </label>
        </div>



        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">


          {plans?.map((plan) => {
            return (
              <div className="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
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
      </div>

    </>
  )
}

export default PriceComponent
