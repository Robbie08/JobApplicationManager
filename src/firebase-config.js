// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

console.log(process.env.REACT_APP_API_KEY);
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "jobapplicationtracker-d3b60.firebaseapp.com",
  projectId: "jobapplicationtracker-d3b60",
  storageBucket: "jobapplicationtracker-d3b60.appspot.com",
  messagingSenderId: "384166959265",
  appId: "1:384166959265:web:64d14c846064ccdcb678e0",
  measurementId: "G-WNQZR2SLDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);