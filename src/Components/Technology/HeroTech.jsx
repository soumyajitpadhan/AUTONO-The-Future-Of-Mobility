import React from 'react'
import Technology from '../../assets/Technology/technology.jpg'

const HeroTech = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
            <div className='relative min-h-screen sm:h-[120vh] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${Technology})` }}>
                <div className='absolute inset-0 flex justify-center top-10'>
                    <div className='max-w-4xl text-center'>
                        <p className='text-3xl sm:text-5xl xl:text-6xl tracking-wider leading-normal sm:leading-normal text-center xl:leading-relaxed xl:tracking-widest'>PERCEPTION ENABLED TECHNOLOGY</p>
                    </div>
                </div>
            </div>
            <div className='text-center px-4 sm:px-14 md:px-24 lg:px-32 xl:px-52 xl:pt-10'>
                <p className='md:tracking-wider md:leading-relaxed text-lg'>If you want to rely on a trusted partner offering all relevant ingredients for your dependable systems - automotive quality, Functional Safety, cybersecurity, innovative products, system understanding, operational excellence - then you need Autono and Autono automotive dependability.</p>
            </div>
        </div>
    )
}

export default HeroTech
