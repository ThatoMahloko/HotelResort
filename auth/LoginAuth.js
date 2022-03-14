import React from 'react'
import { auth } from '../config/firebase'
const user = null;
const LoginAuth = (email, password) => {

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            user = userCredential.user
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        })
}
export const currentUser = user;
export default LoginAuth