import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation()
    // const navigate = useNavigate()

    console.log(location);

    if(loading){
        return <div className='flex justify-center py-20'><span className="loading loading-spinner text-error"></span></div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
};

export default PrivateRoute;