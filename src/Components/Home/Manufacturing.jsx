import React from 'react'
import ManufacturingImage from '../../assets/Home/Manufacturing.jpg'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Manufacturing = () => {

  const navigate = useNavigate();

  return (
    <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat relative h-screen bg-cover bg-center' style={{ backgroundImage: `url(${ManufacturingImage})` }}>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white w-[90%] max-w-lg h-[80%] max-h-[90vh] rounded-3xl p-10 flex flex-col justify-evenly md:px-16 md:left-16 md:top-20 md:transform-none md:w-[60%] md:max-w-sm lg:left-44 lg:h-[90%] lg:max-h-[90vh] lg:w-[70%] lg:max-w-lg lg:top-10 lg:py-0 lg:px-20'>
        <div className=' absolute border-l border-white left-[7%] top-[10%] h-[60vh] lg:h-[72vh]'></div>
        <div className='flex flex-col gap-y-5 '>
          <p className='text-sm md:tracking-wide lg:tracking-widest'>WHY AUTOVATE</p>
          <p className='text-lg tracking-wider md:text-xl md:leading-relaxed lg:text-2xl lg:leading-loose'>A different approach, using a new method of manufacturing.</p>
        </div>
        <div className='flex flex-col gap-y-5'>
          <p className='text-sm md:text-base lg:text-base'>Autonomy requires trust. The key to the successful combination of both technology and trust, is dependable electronics.</p>
          <p className='text-sm md:text-base lg:text-base'>We offer innovative top-quality semiconductors and semiconductor solutions combined with broad system knowledge. </p>
        </div>
        <div className='w-40 flex border border-white rounded-lg'>
          <button className='py-2 px-3 rounded-l-lg hover:bg-white hover:text-black transition duration-300 ease-in' onClick={() => navigate('/about')}>Read More</button>
          <button className='border-l border-white px-2'><ArrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Manufacturing
