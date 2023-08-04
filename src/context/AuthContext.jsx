import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase/firebase.config"; 

export const authContext = createContext(); 
const auth = getAuth(app)


const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const userRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const userLogin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    const authInfo ={
        user,
        loading,
        userRegister,
        userLogin,
        userLogout
    }
    return (
        <authContext.Provider value = {authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;