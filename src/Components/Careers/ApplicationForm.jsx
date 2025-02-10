import React, { useRef, useState } from 'react';
import Navbar from '../Home/Navbar';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import { toast, Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ApplicationForm = () => {

    const { jobId } = useParams();

    const jobPostings = useSelector((state) => state.jobPostings);

    const job = jobPostings.find((job) => job.id == jobId);

    const [isLoading, setIsLoading] = useState(false);

    const formRefs = {
        firstNameRef: useRef(),
        lastNameRef: useRef(),
        emailRef: useRef(),
        phoneRef: useRef(),
        cvRef: useRef(),
        linkedinRef: useRef(),
        commentsRef: useRef(),
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const firebaseUrl = import.meta.env.VITE_FIREBASE_APPLICATIONS_URL;
        const fullName = `${formRefs.firstNameRef.current.value} ${formRefs.lastNameRef.current.value}`;

        const formData = {
            fullName,
            email: formRefs.emailRef.current.value,
            phone: formRefs.phoneRef.current.value,
            position: job ? job.title : "",
            cv: formRefs.cvRef.current.value,
            linkedin: formRefs.linkedinRef.current.value,
            comments: formRefs.commentsRef.current.value,
        };

        try {
            await axios.post(firebaseUrl, formData);
            toast.success("Application submitted successfully!");
            Object.values(formRefs).forEach((ref) => {
                if (ref.current) ref.current.value = '';
            });
        } catch (error) {
            console.error('Error submitting application:', error);
            toast.error("Failed to submit application.")
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col items-center font-montserrat'>
                <div className='border-b border-black w-full'>
                    <h1 className='my-12 text-4xl text-center md:text-5xl lg:text-6xl xl:text-7xl'>JOIN US</h1>
                </div>

                <div className='w-full p-5 md:max-w-lg lg:max-w-xl xl:max-w-3xl'>
                    <h3 className='my-10 text-xl xl:text-2xl tracking-wider font-bold'>Submit Your Application</h3>

                    <form onSubmit={handleSubmit}>
                        {/* Form Fields */}
                        <div>
                            <label htmlFor="firstName" className='block tracking-wider'>First Name *</label>
                            <input type="text" id='firstName' ref={formRefs.firstNameRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="lastName" className='block tracking-wider'>Last Name *</label>
                            <input type="text" id='lastName' ref={formRefs.lastNameRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="email" className='block tracking-wider'>Email *</label>
                            <input type="email" id='email' ref={formRefs.emailRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="phone" className='block tracking-wider'>Phone *</label>
                            <input type='tel' id='phone' ref={formRefs.phoneRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="position" className='block tracking-wider'>Position *</label>
                            <input
                                type="text"
                                id="position"
                                className='border border-black w-full mt-1 mb-6 p-2 rounded-md'
                                required
                                defaultValue={job ? job.title : ""}
                                readOnly
                            />
                        </div>
                        <div>
                            <label htmlFor="cv" className='block tracking-wider'>CV URL *</label>
                            <input type="url" id="cv" ref={formRefs.cvRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="linkedin" className='block tracking-wider'>LinkedIn URL *</label>
                            <input type="url" id="linkedin" ref={formRefs.linkedinRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md' required />
                        </div>
                        <div>
                            <label htmlFor="comments" className='block tracking-wider'>Any Comments</label>
                            <textarea id="comments" rows="3" ref={formRefs.commentsRef} className='border border-black w-full mt-1 mb-6 p-2 rounded-md'></textarea>
                        </div>

                        {/* Submit Button with Loader */}
                        <div>
                            <button
                                type='submit'
                                className='bg-black text-white py-2 px-4 w-36 text-lg rounded-md border border-black hover:bg-white hover:text-black transition duration-300 ease-in flex items-center justify-center'
                                disabled={isLoading}
                            >
                                {isLoading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default ApplicationForm;
