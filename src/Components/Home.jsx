import React, { use } from 'react';
import Navbar from './Navbar/Navbar';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const Home = () => {
    const userinfo = use(AuthContext)
    // console.log(userinfo);
    
    return (
        <>
        <title>Firebase Authentication Integration - Home</title>
        <div className='mx-auto text-center mt-5 font-bold text-[2rem]'>
            <h4>Home</h4>
        </div>
        </>
    );
};

export default Home;