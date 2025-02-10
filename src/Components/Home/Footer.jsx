import React from 'react'
import LinkedIn from '../../assets/Home/linked.png'
import Facebook from '../../assets/Home/facebook.png'
import Instagram from '../../assets/Home/instagram.png'
import Twitter from '../../assets/Home/twitter.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='font-montserrat px-4 md:px-16 lg:px-28 py-10 border-t border-gray-600'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>
          <h2 className='text-3xl font-bold mb-5'>Contact Us</h2>
          <div className='flex flex-col gap-5'>
            <div>
              <p>Autovate Headquarters</p>
              <p>555 Innovation Drive</p>
              <p>Tech Valley, Future City, 12345</p>
            </div>
            <p>Phone: +91 1234567890</p>
            <p>Email: contact@autovate.com</p>
          </div>
        </div>
        <div className='mt-9 md:mt-0'>
          <h2 className='text-3xl font-bold mb-5'>Quick Links</h2>
          <div className='flex flex-col gap-5'>
            <Link to="/technology" className='hover:text-red-500'>Technology</Link>
            <Link to="/about" className='hover:text-red-500'>About</Link>
            <Link to="/careers" className='hover:text-red-500'>Careers</Link>
          </div>
        </div>
        <div className='mt-9 md:mt-0'>
          <h2 className='text-3xl font-bold mb-5'>Follow Us</h2>
          <div className='flex space-x-5'>
            <a href="#"><img src={LinkedIn} alt="LinkedIn" className='w-5' /></a>
            <a href="#"><img src={Facebook} alt="Facebook" className='w-5' /></a>
            <a href="#"><img src={Twitter} alt="Twitter" className='w-5' /></a>
            <a href="#"><img src={Instagram} alt="Instagram" className='w-5' /></a>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-600 pt-5 text-center mt-12 mb-0 tracking-widest'>
        <p>&copy; 2025 Autovate. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
