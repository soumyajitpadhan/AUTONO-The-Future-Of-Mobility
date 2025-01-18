import React from 'react'
import AutonomousCar from '../../assets/Home/Autonomous-car.jpg'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Driving = () => {

  const navigate = useNavigate();

  return (
    <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
      <div className='mx-auto md:h-screen md:flex md:items-center'>
        <div className='flex flex-col p-8 mx-auto sm:p-14 md:flex-row md:h-full md:items-center md:p-5 lg:w-full lg:justify-evenly'>
          <div className='flex flex-col justify-evenly h-96 md:w-4/6 lg:w-[350px] lg:gap-y-8'>
            <p className='text-2xl md:text-3xl lg:text-4xl lg:tracking-wider lg:leading-snug'>AUTONOMOUS DRIVING</p>
            <p className='sm:text-xl lg:text-xl lg:leading-relaxed lg:tracking-wider'>Dependability is key for automated driving. We deliver dependable electronics which enable systems that are the foundation for trust.</p>
            <div className='w-40 flex border border-black rounded-lg'>
              <button className='py-2 px-3 rounded-l-lg hover:bg-black hover:text-white transition duration-300 ease-in' onClick={() => navigate('/technology')}>Read More</button>
              <button className='border-l border-black px-2'><ArrowRight /></button>
            </div>
          </div>
          <div>
            <img src={AutonomousCar} alt="Autonomous-Driving" className='lg:max-w-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Driving
