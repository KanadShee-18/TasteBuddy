// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTZDb3ARETEBfONwywwIt5JukuJNrZ2II",
  authDomain: "food-delivery-2a0e4.firebaseapp.com",
  projectId: "food-delivery-2a0e4",
  storageBucket: "food-delivery-2a0e4.appspot.com",
  messagingSenderId: "312064653062",
  appId: "1:312064653062:web:fd6f90b78f7caee2439087",
  measurementId: "G-G1X6WQHWQT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
