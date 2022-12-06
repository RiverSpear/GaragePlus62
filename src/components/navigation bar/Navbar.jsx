import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo/Standard Collection 2.svg'

function Navbar() {
    const [header, setHeader] = useState("header")
    const [mobileNavbar, setMobileNavbar] = useState(false)
    
    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("header2")
        } 
    }
    
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    
    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <>
            <div className={`fixed z-20 w-full ${header}`}>
                <div className='flex items-center justify-between gap-10 worksans px-10 md:px-20 lg:px-32 py-4'>
                    <img src={logo} alt="" />
                    <div className='hidden md:flex gap-10'>
                        <Link to='/'>Home</Link>
                        <Link to='/service'>Servis</Link>
                        <Link to='/location'>Lokasi</Link>
                        <Link to='/faq' className='uppercase'>faq</Link>
                        </div>
                    <div className='flex items-center gap-5'>
                        <Link to='/contact' className='bg-amber-500 text-white px-4 py-2 rounded-lg'>Hubungi kami</Link>
                        <div className='block md:hidden cursor-pointer' onClick={() => setMobileNavbar(true)}>
                            <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                <path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`block md:hidden fixed inset-0 z-20 bg-white duration-200 ${mobileNavbar ? "h-screen visible pt-20 sm:pt-32 opacity-100" : "h-0 invisible pt-0 opacity-0"}`}>
                <div className='absolute right-0 top-0 p-10' onClick={() => setMobileNavbar(false)}>
                    <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                        <path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
                <div className='h-full flex justify-end pt-32 px-20'>
                    <div className='flex flex-col gap-7 worksans-500 text-[25px] text-right'>
                        <Link to='/' className='hover:pr-5 hover:text-amber-500 duration-200'>Home</Link>
                        <Link to='/service' className='hover:pr-5 hover:text-amber-500 duration-200'>Servis</Link>
                        <Link to='/location' className='hover:pr-5 hover:text-amber-500 duration-200'>Lokasi</Link>
                        <Link to='/faq' className='hover:pr-5 hover:text-amber-500 uppercase duration-200'>faq</Link>
                        <Link to='/contact' className='hover:pr-5 hover:text-amber-500 capitalize duration-200'>Kontak kami</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar