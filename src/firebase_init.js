// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKW1sA-DyPEg0gjI_MxDcXagD6Dp1AhG8",
  authDomain: "loginfrom-12acd.firebaseapp.com",
  projectId: "loginfrom-12acd",
  storageBucket: "loginfrom-12acd.firebasestorage.app",
  messagingSenderId: "519051143237",
  appId: "1:519051143237:web:a61ab43c422b3c12a5db2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
