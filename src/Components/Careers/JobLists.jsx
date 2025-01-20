import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobPostings } from '../../redux/actions';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'


const JobLists = () => {
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading);
    const jobPostings = useSelector((state) => state.jobPostings);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchJobPostings());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='bg-black text-white font-montserrat'>
            <div>
                {jobPostings.length === 0 ? (
                    <p>No job postings available.</p>
                ) : (
                    jobPostings.map((job) => (
                        <div key={job.id}>
                            <h3>{job.title}</h3>
                            <p>{job.location}</p>
                            <p>{job.description}</p>
                            <div className='w-40 flex border border-white rounded-lg'>
                                <button className='py-2 px-3 rounded-l-lg hover:bg-white hover:text-black transition duration-300 ease-in' onClick={() => navigate('/about')}>Read More</button>
                                <button className='border-l border-white px-2'><ArrowRight /></button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div>
                <button className='border-2 border-white p-2 rounded-lg'><ChevronLeft /></button>
                <button className='border-2 border-white p-2 rounded-lg'><ChevronRight /></button>
            </div>

        </div>
    );
};

export default JobLists;
