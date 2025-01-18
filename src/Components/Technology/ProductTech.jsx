import React from 'react'
import DigitalProduct from '../../assets/Technology/digital_product.jpg'

const ProductTech = () => {
    return (
        <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:mb-24 py-10 px-5 sm:px-24 md:px-0'>
                <div className='relative pl-10 md:w-[330px] md:pl-20 md:mt-14 lg:w-[330px] lg:pl-20 lg:mt-24 xl:pl-48 xl:w-[550px] xl:mt-44'>
                    <h3 className='mb-5 tracking-widest xl:text-lg'>THE AUTONO DIGITAL PRODUCTS</h3>
                    <p className='text-lg tracking-widest leading-relaxed xl:text-2xl xl:leading-loose'>We’ve developed an app so that each vehicle can drive autonomously and make decisions based on real-time information and situational awareness.</p>
                    <div className='absolute border-l border-black h-[100%] sm:h-[100%] md:max-h-[300px] xl:max-h-[380px] left-[3%] top-0 xl:top-[0%] md:left-[14%] lg:left-[11%] xl:left-[26%]'></div>
                </div>
                <div>
                    <img src={DigitalProduct} alt="autono_car" className='' />
                </div>
                <div className='md:px-20 xl:px-48'>
                    <h3 className='mb-5 xl:mb-10 tracking-widest xl:text-lg'>ADVANCED CYBER SECURITY</h3>
                    <p className='text-sm leading-relaxed tracking-wide xl:text-lg xl:leading-loose'>It takes both - technology and trust. Autono's dependable electronics are built on a zero defect automotive quality mindset, which results in the high reliability. We add extensive cybersecurity expertise and a vast security system know-how.</p>
                </div>
                <div className='md:px-20 xl:px-48'>
                    <h3 className='mb-5 xl:mb-10 tracking-widest xl:text-lg'>REAL-TIME INFORMATION</h3>
                    <p className='text-sm leading-relaxed tracking-wide xl:text-lg xl:leading-loose'>Real-time driver information via the app or on-screen whilst driving, or even voice-enabled. The future car is fully connected and always online. It is all-electric and autonomous.</p>
                </div>
            </div>
        </div>
    )
}

export default ProductTech
