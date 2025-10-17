import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    //Email sign in
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // Google sign in
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    // Get current user info
    useEffect(()=> {
        // set the observer 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        // Clear the observer on unmount
        return ()=> {
            unsubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

