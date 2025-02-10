import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='z-20 bg-white text-gray-800 border-b border-l-gray-700 sticky top-0 right-0 left-0 px-5 font-montserrat'>
            <div className='max-w-7xl h-16 mx-auto flex items-center'>
                <nav className='flex justify-between items-center w-full'>
                    <div>
                        <Link to="/" className='tracking-[.30em] text-xl font-extrabold'>AUTOVATE</Link>
                    </div>
                    <div className='md:flex items-center gap-x-8'>
                        <div className='hidden md:flex items-center gap-x-8'>
                            <Link to="/technology" className='hover:text-red-500'>Technology</Link>
                            <Link to="/about" className='hover:text-red-500'>About</Link>
                            <Link to="/careers" className='hover:text-red-500'>Careers</Link>
                        </div>
                    </div>
                </nav>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className='ml-5 md:hidden lg:hidden'
                >
                    {mobileMenuOpen ? (
                        <X className='' aria-hidden="true" />
                    ) : (
                        <Menu className='' aria-hidden="true" />
                    )}
                </button>
            </div>
            {mobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='space-y-1 pb-3 pt-3 flex flex-col'>
                        <Link to="/technology" className='hover:text-red-500'>Technology</Link>
                        <Link to="/about" className='hover:text-red-500'>About</Link>
                        <Link to="/careers" className='hover:text-red-500'>Careers</Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
