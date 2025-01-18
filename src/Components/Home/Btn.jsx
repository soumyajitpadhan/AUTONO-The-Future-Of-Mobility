import React from 'react'
import { ArrowRight } from 'lucide-react'

const Btn = () => {
    return (
        <div className='w-40 flex border border-black rounded-lg'>
            <button className='py-2 px-3 rounded-l-lg hover:bg-black hover:text-white transition duration-300 ease-in'>Read More</button>
            <button className='border-l border-black px-2'><ArrowRight /></button>
        </div>
    )
}

export default Btn
