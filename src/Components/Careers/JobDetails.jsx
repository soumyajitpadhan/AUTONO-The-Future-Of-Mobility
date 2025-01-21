import React from 'react'
import Navbar from '../Home/Navbar'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';

const JobDetails = () => {

    const { id } = useParams();

    const jobPostings = useSelector((state) => state.jobPostings);

    if (!jobPostings || jobPostings.length === 0) {
        return (
            <div>
                <Navbar />
                <div className='text-center mt-32'>Loading job details...</div>
            </div>
        )
    }

    const job = jobPostings.find((job) => job.id === id);

    if (!job) {
        return (
            <div>
                <Navbar />
                <div className='text-center mt-32'>Job not found.</div>
            </div>
        )
    }

    return (
        <div>
            <Navbar />
            <div className='font-montserrat'>
                {/* First Section */}
                <div className='mt-10 h-[70vh] flex flex-col justify-evenly items-center px-5 lg:max-w-7xl lg:mx-auto lg:px-16'>
                    <h1 className='text-3xl font-bold text-center md:text-5xl lg:text-6xl xl:text-7xl'>{job.title}</h1>
                    <p className=' text-center text-xl md:text-3xl lg:tracking-wider lg:leading-normal xl:text-4xl'>{job.description}</p>
                    <div className='flex flex-col items-center justify-center gap-5 md:flex-row md:gap-28 lg:gap-48'>
                        <div className='text-center'>
                            <p className='mb-3 border-b border-black text-lg font-bold tracking-wider md:text-xl md:tracking-widest'>LOCATION</p>
                            <p className=' md:text-lg tracking-wider'>{job.location}</p>
                        </div>
                        <div className='text-center'>
                            <p className='mb-3 border-b border-black text-lg font-bold tracking-wider md:text-xl md:tracking-widest'>EMPLOYMENY TYPE</p>
                            <p className=' md:text-lg tracking-wider'>{job.employment_type}</p>
                        </div>
                    </div>
                </div>

                {/* Second Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 px-5 my-10'>
                    <div>
                        <h3 className='ml-5 mb-3 text-2xl font-bold border-b border-black inline-block tracking-wider'>Responsibilities</h3>
                        <ul className=' list-disc pl-5'>
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='ml-5 mb-3 text-2xl font-bold border-b border-black inline-block tracking-wider'>Qualifications</h3>
                        <ul className=' list-disc pl-5'>
                            {job.qualifications.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails
