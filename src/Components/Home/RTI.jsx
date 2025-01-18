import React from 'react'
import RealTimeInfo from '../../assets/Home/Real-time-info.jpg'
import Btn from './Btn'

const RTI = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
            <div className='mx-auto md:flex items-center lg:h-screen'>
                <div className='flex flex-col-reverse p-8 sm:p-14 md:flex md:flex-row md:p-5 md:items-center lg:p-5'>
                    <div>
                        <img src={RealTimeInfo} alt="Real-Time-Info" className='lg:w-auto' />
                    </div>
                    <div className='h-80 flex flex-col justify-evenly md:w-2/3 md:h-96 lg:w-[350px] lg:gap-y-8'>
                        <p className='text-2xl sm:text-3xl md:text-4xl lg:leading-snug lg:tracking-wider'>REAL-TIME INFORMATION</p>
                        <p className='sm:text-xl md:text-lg lg:text-xl lg:leading-relaxed lg:tracking-wider'>We've developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.</p>
                        <Btn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RTI
