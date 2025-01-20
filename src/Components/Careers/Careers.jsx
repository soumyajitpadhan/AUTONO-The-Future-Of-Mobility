import React from 'react'
import Navbar from '../Home/Navbar'
import HeroCareers from './HeroCareers'
import LocationCareers from './LocationCareers'
import JobOpenings from './JobOpenings'
import JobLists from './JobLists'

const Careers = () => {
    return (
        <div>
            <Navbar />
            <HeroCareers/>
            <LocationCareers/>
            <JobOpenings/>
            <JobLists/>
        </div>
    )
}

export default Careers
