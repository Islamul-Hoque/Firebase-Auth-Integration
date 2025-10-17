import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <div className='mx-auto'>
                <Outlet/>
            </div>
            {/* <Footer/> */}
        </div>
    );
};

export default Root;