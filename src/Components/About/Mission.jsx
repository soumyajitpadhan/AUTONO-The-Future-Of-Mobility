import React from 'react'
import FuturisticCar from '../../assets/About/Futuristic_Car.png'


const Mission = () => {
    return (
        <div className='font-montserrat border-b-2 border-gray-500'>
            <div data-aos='fade-up' data-aos-delay='250' className='md:flex md:flex-row-reverse justify-evenly lg:mt-20 xl:justify-between xl:px-36'>
                <div className='p-10'>
                    <img src={FuturisticCar} alt="" className='m-auto rounded-xl md:h-[500px] lg:h-[550px] xl:h-[600px]' />
                </div>
                <div className='p-10 relative md:max-w-sm md:py-16 lg:py-28 xl:max-w-md'>
                    <h3 className='mb-8 text-sm'>OUR MISSION</h3>
                    <p className='mb-8 text-lg xl:text-2xl tracking-widest'>Redefining the Way We Move</p>
                    <p className='mb-8 text-sm xl:text-base xl:tracking-wider xl:leading-relaxed'>The key to the successful combination of both technology and trust, is dependable electronics.</p>
                    <p className='mb-8 text-sm md:tracking-wider leading-relaxed xl:text-base xl:tracking-wider xl:leading-relaxed'>We offer innovative top-quality semiconductors and semiconductor solutions combined with broad system knowledge. As your trusted partner for premium products and services, we understand the dependability system requirements of robustness, reliability, availability, safety, and security as well as the added value of operational excellence.</p>
                    <div className='absolute border border-black 
                   h-[85%] sm:h-[80%] md:h-[77%] 
                   top-[5%] sm:top-[5%] md:top-[9%] 
                   left-[5%] sm:left-[4%] md:left-[5%] lg:left-[0%] xl:left-[0%]'></div>
                </div>
            </div>
        </div>
    )
}

export default Mission
