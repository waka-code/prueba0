// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";  
import  {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth"     


const firebaseConfig = {
  apiKey: "AIzaSyD3FMhugD4hEo6J4uM9a_fPb750SCKaFrI",
  authDomain: "auth-64e1c.firebaseapp.com",
  projectId: "auth-64e1c",
  storageBucket: "auth-64e1c.appspot.com",
  messagingSenderId: "317474364410",
  appId: "1:317474364410:web:60538f8dc8717a2e8b2243",
  measurementId: "G-9241MGQSHL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email, password){
   return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password){
    return signInWithEmailAndPassword(auth, email, password);
 }

export function logout(){
    return signOut(auth);
}

export function useAuth(){
    const [ currentUSer, setCurrentUser] = useState();
    useEffect(()=>{
     const subUser = onAuthStateChanged(auth, user =>setCurrentUser(user));
     return subUser;
    },[])

    return currentUSer;
}

