import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = () => {
        signOut(auth)
            .then(() => { });
    };
    const updateProfile = (userInfo) => {
        return updateProfile(user, userInfo);
    };
    const authInfo = {
        signUp,
        logIn,
        logOut,
        user,
        updateProfile
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => subscribe;
    }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;