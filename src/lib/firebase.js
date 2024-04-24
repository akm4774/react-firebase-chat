// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-80ff9.firebaseapp.com",
  projectId: "reactchat-80ff9",
  storageBucket: "reactchat-80ff9.appspot.com",
  messagingSenderId: "649890646014",
  appId: "1:649890646014:web:d525d69d45ea9f41e9a2af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()