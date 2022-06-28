// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeGgZokDV22WdA05CLaRgLo0mK6o6aKqw",
  authDomain: "personal-deiry.firebaseapp.com",
  projectId: "personal-deiry",
  storageBucket: "personal-deiry.appspot.com",
  messagingSenderId: "965755834012",
  appId: "1:965755834012:web:6db2b035cb848cb8a22759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;