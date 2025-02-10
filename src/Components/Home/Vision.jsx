import React from 'react'
import Vision_Image from '../../assets/Home/vision.jpg'

const Vision = () => {
    return (
        <div className='bg-black text-white font-montserrat'>
            <div data-aos='fade-up' data-aos-delay='250' className='mx-auto h-screen flex px-5 lg:max-w-7xl'>
                <div className='relative flex flex-col justify-evenly items-center md:flex md:flex-row md:w-full md:gap-x-5'>
                    <span className='absolute top-10 left-2 border-l h-72 border-white sm:h-56 sm:top-7 md:top-40 md:h-80 lg:h-96 lg:top-40'></span>
                    <div className='h-1/2 flex flex-col gap-y-9 pl-10 sm:mt-7 sm:gap-y-7 md:max-w-sm lg:max-h-screen lg:my-auto lg:justify-around lg:w-full '>
                        <p>VISION</p>
                        <p className='text-xl lg:text-2xl lg:leading-relaxed lg:tracking-widest'>We're Changing the Way the World Thinks About Cars</p>
                        <p className='text-lg lg:text-base lg:leading-relaxed lg:tracking-wider'>The Autovate car is fully connected and always online. It is all-electric and autonomous. To make this a reality, it takes both - technology and trust.</p>
                    </div>
                    <div className='w-full h-1/3 overflow-hidden sm:h-1/2 lg:h-[500px]'>
                        <img src={Vision_Image} alt="visionImage" className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
