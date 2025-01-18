import React from 'react'
import Landing_Image from '../../assets/Home/hero.jpg'
import Autono from '../../assets/Home/autono.mp4'
const Hero = () => {
  return (
    <div>
      <div className='relative h-screen bg-cover bg-center font-montserrat'>
        <video src={Autono} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover'></video>
        <div className='absolute inset-0 flex justify-center top-32 max-w-md mx-auto sm:top-36 sm:max-w-xl sm:mx-auto md:max-w-3xl md:top-28 lg:top-28 xl:top-32'>
          <div className='text-center'>
            <p className='text-3xl font-light tracking-[.12em] leading-snug sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight'>THE FUTURE OF MOBILITY IS HERE</p>
            <p className='text-sm leading mt-5 sm:text-xl md:text-2xl'>Discover the safest self-driving experience with Autono.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
