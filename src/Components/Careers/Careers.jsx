import React from 'react'
import Navbar from '../Home/Navbar'
import HeroCareers from './HeroCareers'
import LocationCareers from './LocationCareers'
import JobOpenings from './JobOpenings'
import JobLists from './JobLists'
import Footer from '../Home/Footer'

const Careers = () => {
    return (
        <div>
            <Navbar />
            <HeroCareers/>
            <LocationCareers/>
            <JobOpenings/>
            <JobLists/>
            <Footer/>
        </div>
    )
}

export default Careers
