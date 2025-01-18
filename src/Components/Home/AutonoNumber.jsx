import React from 'react'
import AutonoNumberImage from '../../assets/Home/Autono-number.jpg'

const AutonoNumber = () => {

  const data = [
    { value: '200', lable: 'EMPLOYEES' },
    { value: '5', lable: 'CORE TEAMS' },
    { value: '200M$', lable: 'CAPITAL' },
    { value: '326', lable: 'PARTNERS' },
  ]

  return (
    <div data-aos='fade-up' data-aos-delay='250' className='font-montserrat'>
      <div className='flex flex-col-reverse items-center md:flex-row md:justify-between'>
        <div>
          <img src={AutonoNumberImage} alt="AutonoNumber" className='md:max-w-md lg:max-w-2xl lg:h-screen xl:max-w-3xl'/>
        </div>
        <div className='flex flex-col pt-12 gap-y-10 md:mr-16 xl:w-[400px] xl:mr-40'>
          <p className='text-xl tracking-wider xl:text-3xl'>Autono In Numbers</p>
          <div className='grid grid-cols-2 grid-rows-2 gap-10 sm:gap-14 xl:gap-20'>
            {
              data.map((item, index) => {
                return (
                  <div key={index} className='relative flex flex-col gap-y-5 xl:gap-y-10'>
                    <h3 className='text-2xl tracking-widest xl:text-3xl'>{item.value}</h3>
                    <div className='absolute border-t border-black w-[100%] top-[55%]'></div>
                    <div className='absolute border-t-2 border-black w-[20%] top-[53%] lg:top-[54%]'></div>
                    <div></div>
                    <p className='text-xs tracking-widest lg:text-sm'>{item.lable}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AutonoNumber
