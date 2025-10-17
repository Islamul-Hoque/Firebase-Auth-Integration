import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/logo.png'

import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
const Footer = () => {
    return (
        <footer className=' bg-[#001931] px-6 py-10 md:p-10'>
            <div className='flex flex-col md:flex-row justify-between md:items-start text-white'>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <img className="w-10" src={Logo} alt="Logo" /> <h2 className="font-bold text-xl tracking-wide">HERO.IO</h2>
                    </div>  
                    <p className="text-gray-400 text-sm max-w-sm"> Crafting modern web & mobile applications for millions.  We turn ideas into digital success stories.  </p> 
                </div>

                <div>
                    <h3 className="font-semibold mb-3 ">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-gray-400 text-sm">
                        <Link to="/" className="link-hover">Home</Link>
                        <Link to="/apps" className="link-hover">All Apps</Link>
                        <Link to="/Installation" className="link-hover">Installation</Link>
                    </nav>
                </div>

                <div>
                    <h3 className="font-semibold mb-3 ">Resources</h3>
                    <nav className="flex flex-col gap-2 text-gray-400 text-sm">
                        <Link to="/privacy" className=" link-hover">Privacy Policy</Link>
                        <Link to="/terms" className=" link-hover">Terms of Service</Link>
                        <Link to="/faq" className="link-hover ">FAQ</Link>
                    </nav>
                </div>

                <div>
                    <h2 className="mb-3 font-semibold ">Follow Us</h2>
                    <div className=" flex items-center gap-4 text-2xl">
                        <Link to="https://www.twitter.com/"  target="_blank"  className="hover:scale-110 transition-transform duration-200"> <RiTwitterXFill className="bg-white text-black p-1 rounded-full" /></Link>
                        <Link to="https://www.linkedin.com/" target="_blank"  className="hover:scale-110 transition-transform duration-200"> <TiSocialLinkedin className="bg-white text-black p-1 rounded-full" /> </Link>
                        <Link to="https://www.facebook.com/" target="_blank"  className="hover:scale-110 transition-transform duration-200"> <TiSocialFacebook  className="bg-white text-black  rounded-full" /> </Link>
                    </div>
                </div>
            </div>

            <p className='border-t-1 mt-5 pt-3 border-t-[#e5e7eb4a] text-white text-center'> &copy; 2025 <Link to='/' className="text-[#9f62f2] font-semibold">HERO.IO</Link> — All Rights Reserved.</p>
        </footer>
    )
}

export default Footer; 