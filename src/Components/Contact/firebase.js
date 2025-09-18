// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config (তুমি যেটা পেয়েছো সেটা ব্যবহার করো)
const firebaseConfig = {
  apiKey: "AIzaSyDnmnHic6dIpiO3pdovpQjHF0YKkoK6KGY",
  authDomain: "prohealth-b5b9c.firebaseapp.com",
  projectId: "prohealth-b5b9c",
  storageBucket: "prohealth-b5b9c.firebasestorage.app",
  messagingSenderId: "698151111196",
  appId: "1:698151111196:web:9af78e1d8c9c20e31e2dd9",
  measurementId: "G-S3ZD6HHK4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database instance export
export const db = getFirestore(app);
