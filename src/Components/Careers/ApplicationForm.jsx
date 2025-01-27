import React from 'react'
import Navbar from '../Home/Navbar'

const ApplicationForm = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className='flex flex-col items-center font-montserrat'>
                    <div className='  border-b border-black w-full'>
                        <h1 className='my-12 text-4xl text-center'>JOIN US</h1>
                    </div>

                    <div className=' w-full p-5'>
                        <div className=''>
                            <h3 className='my-10 text-xl tracking-wider font-bold'>Submit Your Application</h3>
                        </div>

                        <form action="">
                            <div>
                                <label htmlFor="firstName" className='block tracking-wider'>First Name *</label>
                                <input type="text" id='firstName' className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="lastName" className='block tracking-wider'>Last Name *</label>
                                <input type="text" id='lastName' className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block tracking-wider'>Email *</label>
                                <input type="email" id='email' className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="phone" className='block tracking-wider'>Phone</label>
                                <input type='tel' id='phone' className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="position" className='block tracking-wider'>Position</label>
                                <select name="" id="position" className='border border-black w-full mt-1 mb-6 p-3 rounded-md'>
                                    <option value="">Select Position</option>
                                    <option value="">Frontend Developer</option>
                                    <option value="">Backend Developer</option>
                                    <option value="">Full Stack Developer</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="cv" className='block tracking-wider'>CV URL *</label>
                                <input type="url" id="cv" className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="linkedin" className='block tracking-wider'>LinkedIn URL</label>
                                <input type="url" id="linkedin" className='border border-black w-full mt-1 mb-6 p-2 rounded-md' />
                            </div>
                            <div>
                                <label htmlFor="comments" className='block tracking-wider'>Any Comments</label>
                                <textarea id="comments" rows="3" className='border border-black w-full mt-1 mb-6 p-2 rounded-md'></textarea>
                            </div>
                            <div>
                                <button type='submit' className='bg-black text-white py-2 px-4 text-lg rounded-md border border-black hover:bg-white hover:text-black transition duration-300 ease-in'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm
