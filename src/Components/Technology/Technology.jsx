import React from 'react'
import Navbar from '../Home/Navbar'
import HeroTech from './HeroTech'
import PerceptionTech from './PerceptionTech'
import ProductTech from './ProductTech'
import Footer from '../Home/Footer'

const Technology = () => {
    return (
        <div>
            <Navbar />
            <HeroTech/>
            <PerceptionTech/>
            <ProductTech/>
            <Footer/>
        </div>
    )
}

export default Technology
