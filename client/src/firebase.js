// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-61146.firebaseapp.com",
  projectId: "mern-blog-61146",
  storageBucket: "mern-blog-61146.appspot.com",
  messagingSenderId: "364000976909",
  appId: "1:364000976909:web:4af382fb3d097a1c3d3544"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);