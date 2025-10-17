import React, { use } from 'react';
import Navbar from './Navbar/Navbar';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const Home = () => {
    const userinfo = use(AuthContext)
    // console.log(userinfo);
    
    return (
        <div>
            <h4>Home</h4>
        </div>
    );
};

export default Home;