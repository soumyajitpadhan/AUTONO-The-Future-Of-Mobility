import React from 'react'
import GeneralTransport from '../../assets/Home/General-Transport.jpg'
import IDISoftware from '../../assets/Home/IDI-Software.jpg'
import ImogenCars from '../../assets/Home/Imogen-Cars.jpg'
import TriNex from '../../assets/Home/Tri-Nex.jpg'

const Industry = () => {

    const logoData = [
        { logo: GeneralTransport, name: 'GENERAL TRANSPORT' },
        { logo: IDISoftware, name: 'IDI SOFTWARE' },
        { logo: ImogenCars, name: 'IMOGEN CARS' },
        { logo: TriNex, name: 'TRI-NEX' },
    ]

    return (
        <div className='bg-black text-white font-montserrat relative'>
            <div data-aos='fade-up' data-aos-delay='250' className='h-screen flex flex-col justify-evenly items-center md:flex-row md:h-[70vh] lg:h-screen'>
                <div className='flex flex-col gap-y-6 pl-14 pr-5 sm:pl-24 md:pl-16 md:w-[50vw] lg:w-[35vw] lg:pl-0 xl:w-[25vw] xl:gap-y-16'>
                    <p className='text-sm tracking-widest'>INDUSTRY</p>
                    <h3 className='text-xl leading-relaxed tracking-widest md:text-2xl xl:text-3xl xl:leading-relaxed'>Our <span className='block'>Partners</span></h3>
                    <p className='text-sm leading-relaxed lg:text-base lg:tracking-widest lg:leading-relaxed'>Designed and developed the Autono website to showcase our esteemed partners with a clean, modern design. The site highlights collaborations with industry leaders like General Transport, IDI Software, Imogen Cars, and Tri-Nex, ensuring a responsive and engaging user experience across all devices.</p>
                </div>
                <div className='grid grid-rows-2 grid-cols-2 gap-8 px-6 lg:gap-24 lg:px-0'>
                    {
                        logoData.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-y-5 justify-center items-center'>
                                    <img src={item.logo} alt={item.name} className='aspect-square w-16 lg:w-20 xl:w-24' />
                                    <p className='text-xs text-center tracking-widest leading-relaxed lg:text-sm'>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='absolute border-l border-white h-[50%] sm:h-[35%] md:h-[75%] top-[3%] sm:top-[10%] md:top-[12%] left-[8%] md:left-[4%] xl:left-[11%]'></div>
            </div>
        </div>
    )
}

export default Industry
