import React from 'react'
import Openings from '../../assets/Careers/openings.png'

const JobOpenings = () => {
    return (
        <div className='font-montserrat'>
            <div className='h-screen bg-black text-white flex flex-col justify-evenly items-center md:flex-row md:items-center md:justify-between'>
                <div className='relative w-[300px] flex flex-col gap-10 mt-10 pl-5 md:pl-20 md:w-[340px] lg:w-[370px] xl:w-[400px] lg:ml-24 xl:ml-36 xl:gap-14'>
                    <p className='text-sm tracking-widest xl:text-base'>JOB OPENINGS</p>
                    <h3 className='text-lg tracking-wider leading-relaxed xl:leading-relaxed xl:tracking-widest'>Changing the future of transportation means thinking differently.</h3>
                    <p className='text-base lg:text-lg lg:leading-relaxed lg:tracking-wider xl:leading-loose xl:tracking-widest'>We need your contribution to create solutions that help solve the technological, economic and social challenges facing the world today!</p>
                    <div className='absolute border-l border-white h-full left-0 md:left-14 lg:left-10'></div>
                </div>
                <img src={Openings} alt="" className=' md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[90%] xl:h-[100%]' />
            </div>
        </div>
    )
}

export default JobOpenings
