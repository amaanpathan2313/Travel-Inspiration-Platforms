


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpotMp6MiYNXw-38t6h5AIbm4RvdhUGfQ",
    authDomain: "moviedatabase-7ddef.firebaseapp.com",
    databaseURL: "https://moviedatabase-7ddef-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moviedatabase-7ddef",
    storageBucket: "moviedatabase-7ddef.firebasestorage.app",
    messagingSenderId: "474196274769",
    appId: "1:474196274769:web:c51be63eb9819b22535270",
    measurementId: "G-QFGBCM5HPV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }