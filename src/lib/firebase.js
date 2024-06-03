import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatt-c3b23.firebaseapp.com",
  projectId: "react-chatt-c3b23",
  storageBucket: "react-chatt-c3b23.appspot.com",
  messagingSenderId: "68812430976",
  appId: "1:68812430976:web:0908d63167aa944f60d065",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
