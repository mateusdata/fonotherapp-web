import React from 'react'
import GlobalLayout from '../templates/GlobalLayout'
import RocketAnimate from '../components/lottie/RocketAnimate'
import UserAnimate from '../components/lottie/UserAnimate'

const Home = () => {
  return (
    <GlobalLayout>
      <div className='relative overflow-hidden'>
        <div className='bg-cyan-500 h-180 '>
          <div className='bg-cyan-500 transform  skew-y-2'>
            <div className='flex items-center justify-center py-10'>
              <RocketAnimate />
            </div>
          </div>
        </div>

        <div className='bg-gray-5 h-80 transform skew-y-2 '>
          <div className='flex items-center justify-center py-10'>
            <UserAnimate />
          </div>
        </div>


        <div className='bg-blue-500 min-h-52 mb-2 flex items-center justify-center'>
        <p className="text-white text-center">Aproveite nossos planos e melhore sua comunicação!</p>
      </div>

      <div className='bg-red-400 min-h-52 flex items-center justify-center'>
        <p className="text-white text-center">Adquira agora e descubra os benefícios para sua saúde auditiva!</p>
      </div>
      </div>
    </GlobalLayout>
  )
}

export default Home
