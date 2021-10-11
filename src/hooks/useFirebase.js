import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] =useState('')
    const auth = getAuth();

    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   const signInUsingGoogle = () => {
        signInWithPopup(auth,GoogleProvider)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            setError(error.message);
        })

    }
    const signInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser();
        })
    }

    const logout = () => {
        signOut(auth)
        .then( () =>{
            setUser({});
        })
    }

    useEffect( () =>{
        onAuthStateChanged(auth, user =>{
        if (user) {
            console.log('Inside state change')
            setUser(user);
        }
        else {

        }
    })
    })

    return {
        user,
        error,
        logout,
        signInUsingGithub,
        signInUsingGoogle
    }
}
export default useFirebase;