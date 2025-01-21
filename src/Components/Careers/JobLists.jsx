import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobPostings, setCurrentPage } from '../../redux/actions';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const JobLists = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loading = useSelector((state) => state.loading);
    const jobPostings = useSelector((state) => state.jobPostings);
    const error = useSelector((state) => state.error);
    const currentPage = useSelector((state) => state.currentPage);
    const totalPages = useSelector((state) => state.totalPages);
    const itemsPerPage = useSelector((state) => state.itemsPerPage);

    useEffect(() => {
        dispatch(fetchJobPostings(currentPage, itemsPerPage));
    }, [dispatch, currentPage, itemsPerPage]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    }

    if (loading) {
        return (
            <div class="flex items-center justify-center h-screen">
                <div class="relative">
                    <div class="h-20 w-20 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div class="absolute top-0 left-0 h-20 w-20 rounded-full border-t-8 border-b-8 border-black animate-spin">
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return <div className='text-center text-red-500 my-10'>Error: {error}</div>;
    }

    const handleJobDetails = (jobId) => {
        navigate(`/job/${jobId}`);
    }


    return (
        <div className='bg-black text-white font-montserrat'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 py-10 px-5 md:px-10'>
                {jobPostings.length === 0 ? (
                    <p className=' col-span-full text-center text-gray-500'>No job postings available.</p>
                ) : (
                    jobPostings.map((job) => (
                        <div key={job.id} className='border-2 border-gray-500 p-5 h-80 flex flex-col justify-evenly rounded-lg'>
                            <h3 className='text-xl tracking-wider'>{job.title}</h3>
                            <p className='text-gray-400'>{job.location}</p>
                            <p className=' tracking-wider leading-relaxed'>{job.description}</p>
                            <div className='w-44 flex border border-white rounded-lg'>
                                <button onClick={() => handleJobDetails(job.id)} className='py-2 px-3 rounded-l-lg hover:bg-white hover:text-black transition duration-300 ease-in'>View Details</button>
                                <button className='border-l border-white px-2'><ArrowRight /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className='flex justify-center items-center gap-5 pb-10'>
                <button onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`border-2 p-2 rounded-full ${currentPage === 1
                        ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                        : 'border-white text-white hover:bg-white hover:text-black transition duration-300 ease-in'
                        }`}>
                    <ChevronLeft />
                </button>
                <span className='text-gray-300 text-lg'>{`${currentPage} / ${totalPages}`}</span>
                <button onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`border-2 p-2 rounded-full ${currentPage === totalPages
                        ? 'border-gray-700 text-gray-700 cursor-not-allowed'
                        : 'border-white text-white hover:bg-white hover:text-black transition duration-300 ease-in'
                        }`}>
                    <ChevronRight />
                </button>
            </div>

        </div>
    );
};

export default JobLists;
