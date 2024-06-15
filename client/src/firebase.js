// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-65b2e.firebaseapp.com",
  projectId: "mern-auth-65b2e",
  storageBucket: "mern-auth-65b2e.appspot.com",
  messagingSenderId: "831889275530",
  appId: "1:831889275530:web:60e5fa93e3d148b437cb73",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
