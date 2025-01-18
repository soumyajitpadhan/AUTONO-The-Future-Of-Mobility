import React from 'react'
import Finance from '../../assets/About/Finance.png'
import LondonPost from '../../assets/About/London_post.png'
import PaloAltoTribunal from '../../assets/About/Palo_Alto_Tribunal.png'
import RCR from '../../assets/About/RCR.png'
import TBReview from '../../assets/About/TB_Review.png'

const News = () => {
  return (
    <div className='bg-black font-montserrat text-white'>
      <div data-aos='fade-up' data-aos-delay='250' className='flex flex-col justify-evenly px-10 h-[80vh] lg:max-w-7xl m-auto'>
        <div className=' relative flex flex-col gap-10 justify-center pl-5'>
          <p className='text-xs md:text-sm lg:text-base'>NEWS</p>
          <h3 className='text-xl tracking-wider md:text-2xl md:tracking-widest lg:text-3xl'>Autono In The Press</h3>
          <div className=' absolute border-l border-white h-24 left-0'></div>
        </div>
        <div className='flex flex-col'>
          <div className='grid grid-cols-2 gap-10 md:grid-cols-5 md:items-center'>
            <img src={RCR} alt="" className='w-28 lg:w-32' />
            <img src={TBReview} alt="" className='w-28 lg:w-32' />
            <img src={Finance} alt="" className='w-28 lg:w-32' />
            <img src={PaloAltoTribunal} alt="" className='w-28 lg:w-32' />
            <img src={LondonPost} alt="" className='w-28 lg:w-32' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
