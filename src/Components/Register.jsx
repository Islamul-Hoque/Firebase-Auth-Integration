import React, { use } from 'react';
import { Link, Links } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';


const Register = () => {
    const { createUser } = use(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        // const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <>
        <title>Firebase Authentication Integration - Register</title>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl text-center mt-4 font-bold">Register now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Your name" />

                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />

                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />

                                <button className="btn btn-neutral mt-4">Register now!</button>
                            </fieldset>
                        </form>
                        <p>Already have an account? Please  <Link to='/login' className='text-blue-500 hover:text-blue-700 hover:link font-semibold'>Log-in</Link>  </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Register;