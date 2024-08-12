import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
   const [user,setUser]= useState(null)

   const auth=getAuth(app)

   const userSignup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(currentUser=>{
        console.log(currentUser)
        setUser(currentUser)
    }))
    return ()=>{
        return unsubscribe()
    }
   },[])

   const updateUserProfile= (name,photourl) =>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photourl

    })
    
}
const userLogOut = ()=>{
    return signOut(auth)
}
    const authInfo = {
      user,
      userSignup,
      userLogin,
      updateUserProfile,
      userLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;