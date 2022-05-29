import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTV09l3BIWyiorxC845lLyZUXqcbElKCI",
  authDomain: "house-marketplace-app-dedbd.firebaseapp.com",
  projectId: "house-marketplace-app-dedbd",
  storageBucket: "house-marketplace-app-dedbd.appspot.com",
  messagingSenderId: "886932146048",
  appId: "1:886932146048:web:0a1d9189af2d07dc782365"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()

