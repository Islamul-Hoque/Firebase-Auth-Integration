import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../Layout/Root';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import Orders from '../Components/Orders/Orders';
import PrivateRoute from './PrivateRoute';
import Profile from '../Components/Profile/Profile';
import Dashboard from '../Components/Dashboard/Dashboard';


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children : [
            {
                index: true,
                Component: Home
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register
            },
            {
                path: 'Orders',
                element: <PrivateRoute>  <Orders/> </PrivateRoute>
            },
            {
                path: 'profile',
                element: <PrivateRoute>  <Profile/> </PrivateRoute>
            },
            {
                path: 'dashboard',
                element: <PrivateRoute> <Dashboard/> </PrivateRoute>
            }
        ]
    },
]);

export default router;
