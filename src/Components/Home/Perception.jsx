import React from 'react'
import PerceptionImage from '../../assets/Home/Perception.jpg'
import Btn from './Btn'

const Perception = () => {
  return (
    <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
      <div className='mx-auto md:h-screen md:flex md:items-center'>
        <div className='flex flex-col p-8 mx-auto sm:p-14 md:flex-row md:h-full md:items-center md:p-5 lg:w-full lg:justify-evenly'>
          <div className='flex flex-col justify-evenly h-96 md:w-[500px] md:gap-y-8 lg:w-[350px] lg:gap-y-8'>
            <p className='text-2xl md:text-3xl lg:text-4xl lg:tracking-wider lg:leading-snug'>PERCEPTION ENABLED</p>
            <p className='sm:text-xl lg:text-xl lg:leading-relaxed lg:tracking-wider'>Using groundbreaking perception-enabled sensor technology, the Autono car is a fully driverless vehicle engineered to the highest degree of precision and safety. It’s autonomous driving reimagined.</p>
            <Btn/>
          </div>
          <div>
            <img src={PerceptionImage} alt="Autonomous-Driving" className='lg:max-w-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perception
