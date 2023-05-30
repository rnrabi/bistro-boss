import {createContext, useState ,useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../src/firebase/firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const signUp = (email , password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email, password)
    }
    const logIn =(email , password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password);
    }
    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>{
            alert('successfully log out')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        signUp,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;