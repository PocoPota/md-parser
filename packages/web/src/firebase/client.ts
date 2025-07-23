// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz1t1gJp6Oqb5o3x89Q7_9_r93c2nkgI8",
  authDomain: "md-parser.firebaseapp.com",
  projectId: "md-parser",
  storageBucket: "md-parser.firebasestorage.app",
  messagingSenderId: "988778268500",
  appId: "1:988778268500:web:3c9d95330e857f6918eac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();