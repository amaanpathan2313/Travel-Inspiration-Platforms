
import { async } from "@firebase/util";
import React from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const authUser = createContext();


function AuthContext({ children }) {
    const [msg, setMsg] = useState(null)
    // const [isUser, setIsUser] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null);
    const navigate = useNavigate()

    async function addUser(email, name) {
        try {
            let response = await fetch('https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app/usertravelhistory.json',{
                method: 'POST',
                headers: { 'Content-Type': 'application.json' },
                body: JSON.stringify({ name : name, email : email })
            })
        } catch (error) {
            console.log("Error while add user name", error.message)
        }
    }

    async function signUp(email, password, name) {
        try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(userCredential.user)
            setMsg(userCredential.user);
            addUser(email, name);
            return userCredential.user;

        } catch (error) {
            setErrorMsg(error.message)
            return (error.message)
        }
    }

    async function loginUser(email, password) {
        try {
            let userCredential = await signInWithEmailAndPassword(auth, email, password);
            // console.log(userCredential.user)
            setMsg(userCredential.user);
            console.log(userCredential.user)
            return userCredential.user;

        } catch (error) {
            setErrorMsg(error.message)
            return (error.message)
        }
    }

    async function logoutUser() {
        try {
            await signOut(auth);
            localStorage.removeItem('user');
            setMsg(null);
            navigate('/login');
        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    return (
        <>
            <authUser.Provider value={{ logoutUser, loginUser, signUp, msg, errorMsg }}>
                {children}
            </authUser.Provider>
        </>
    )
}

export default AuthContext;