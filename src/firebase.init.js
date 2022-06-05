// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfQN-2cxl623GlCqieBn6m1R1VbjG_bM8",
    authDomain: "genious-car-c1ce8.firebaseapp.com",
    projectId: "genious-car-c1ce8",
    storageBucket: "genious-car-c1ce8.appspot.com",
    messagingSenderId: "338801031742",
    appId: "1:338801031742:web:28881f8ac440e9b4c5af6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;