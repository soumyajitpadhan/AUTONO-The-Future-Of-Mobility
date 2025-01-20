import React from 'react'
import LocationImage from '../../assets/Careers/location.png';

const LocationCareers = () => {
    return (
        <div className='font-montserrat'>
            <div className='my-12 flex flex-col justify-between md:flex-row md:items-center md:justify-evenly md:h-[90vh]'>
                <div className='relative flex flex-col gap-4 w-[290px] m-auto pl-5 md:w-[350px] md:ml-16 md:gap-10 lg:ml-32 xl:ml-48'>
                    <p className='text-xs text-gray-700 tracking-widest xl:text-sm'>LOCATION</p>
                    <h3 className='text-2xl tracking-wider leading-normal xl:text-3xl'>We're based in San Francisco's innovation hub</h3>
                    <p className='text-base text-gray-700 lg:text-lg lg:leading-relaxed lg:tracking-wider xl:leading-relaxed xl:tracking-wider'>The digital revolution is shaping our world. We share a common mission: make life easier, safer and greener for generations to come. As part of our team, you can actively create semiconductor solutions that enable smart mobility, efficient energy management, and the secure capture and transfer of data.</p>
                    <div className='absolute border-l h-[70vh] border-black left-0 md:h-full'></div>
                </div>
                <div className='w-full md:w-[50%] lg:w-[45%] flex justify-center'>
                    <img src={LocationImage} alt="Location" className='w-full h-full object-contain md:object-cover' />
                </div>
            </div>
        </div>
    )
}

export default LocationCareers
