// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDONkDCKtfyt3QZtzCfd3ONp6DliGO_TzA",
  authDomain: "ventehuitres-9aa8b.firebaseapp.com",
  projectId: "ventehuitres-9aa8b",
  storageBucket: "ventehuitres-9aa8b.appspot.com",
  messagingSenderId: "1013400951266",
  appId: "1:1013400951266:web:0f1f957dc882296f6441bb",
  measurementId: "G-SWCYK887WM"
    
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

