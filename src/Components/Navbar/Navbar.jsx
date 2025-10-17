import React, { use } from 'react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';
import Logo from '../../assets/logo.png'
import gitImg from '../../assets/git.png'
import './Navbar.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext)
    const handleSignOut = ()=>{
        signOutUser()
        .then(()=>{ })
        .catch(error => {
            console.log(error.message);
        })
    } 

    const link = <>
    <li><NavLink end to='/'>Home</NavLink></li>
    <li><NavLink end to='/login'>Login</NavLink></li>
    <li><NavLink end to='/register'>Register</NavLink></li>
    <li><NavLink end to='/dashboard'>Dashboard</NavLink></li>
    {
        user && <>
            <li><NavLink end to='/orders'>Orders</NavLink></li>
            <li><NavLink end to='/profile'>Profile</NavLink></li>
        </>
    }
    </>
    return (
        <div className="navbar px-6 md:px-8 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {link}
                    </ul>
                </div>
                <Link to='/'><img className='w-[2rem]' src={Logo} alt="" /></Link>
                <Link className="text-2xl font-bold bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] bg-clip-text text-transparent">HERO.IO</Link>
            </div>

            <div className="navbar-center">
                <ul className="font-semibold menu menu-horizontal px-1 hidden md:flex">
                    { link}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleSignOut} className='btn btn-primary'>Log out</button> :  
                    <Link to='/login' className="btn text-white bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)]">Sign-in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
