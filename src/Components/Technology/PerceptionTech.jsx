import React from 'react'
import AutonoCar from '../../assets/Technology/autono_car.jpg'

const PerceptionTech = () => {
    return (
        <div className='bg-black text-white font-montserrat mt-36'>
            <div data-aos='fade-up' data-aos-delay='250' className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 py-10 px-5 sm:px-24 md:px-0'>
                <div className='relative pl-10 md:w-[330px] md:pl-20 md:mt-14 lg:w-[330px] lg:pl-20 lg:mt-24 xl:pl-48 xl:w-[550px] xl:mt-44'>
                    <h3 className='mb-5 tracking-widest'>THE AUTONO CAR</h3>
                    <p className='text-lg tracking-widest leading-relaxed xl:text-xl xl:leading-loose'>Using groundbreaking perception-enabled sensor technology, the Autono car is a fully driverless vehicle engineered to the highest degree of precision and safety. It's autonomous driving reimagined.</p>
                    <div className='absolute border-l border-white h-[100%] sm:h-[100%] md:max-h-[350px] lg:max-h-[350px] xl:max-h-[370px] left-[3%] top-0 xl:top-[0%] md:left-[14%] lg:left-[11%] xl:left-[26%]'></div>
                </div>
                <div>
                    <img src={AutonoCar} alt="autono_car" className='' />
                </div>
                <div className='md:px-20 xl:px-48 md:pb-24'>
                    <h3 className='mb-5 xl:mb-10 tracking-widest'>CYBER SECURITY</h3>
                    <p className='text-sm leading-relaxed tracking-wide xl:text-lg xl:leading-loose'>Our dependable electronics leverage a deeply embedded broad system knowledge. We add extensive cybersecurity expertise that integrates our scalable product portfolio and a vast security system know-how.</p>
                </div>
                <div className='md:px-20 xl:px-48 md:pb-24'>
                    <h3 className='mb-5 xl:mb-10 tracking-widest'>SAFETY</h3>
                    <p className='text-sm leading-relaxed tracking-wide xl:text-lg xl:leading-loose'>We incorporate a holistic Functional Safety approach enabling highly available fail-operational systems that meet the requirements of functional safety in accordance with ISO26262.</p>
                </div>
            </div>
        </div>
    )
}

export default PerceptionTech
