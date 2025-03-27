import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRgFIB7zZGfo3S9Jneoukb0Va8-4BOI5w",
  authDomain: "apps-2591d.firebaseapp.com",
  projectId: "apps-2591d",
  storageBucket: "apps-2591d.firebasestorage.app",
  messagingSenderId: "706145434168",
  appId: "1:706145434168:web:33dce9509c3f24930804cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();
