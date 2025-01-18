import React from 'react'
import Navbar from '../Home/Navbar'
import HeroAbout from './HeroAbout'
import Mission from './Mission'
import Journey from './Journey'
import News from './News'
import Footer from '../Home/Footer'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroAbout/>
            <Mission/>
            <Journey/>
            <News/>
            <Footer/>
        </div>
    )
}

export default About
