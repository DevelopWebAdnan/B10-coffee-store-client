// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA88Q7r455igUXogR2tVl5rBnKXkTC-e7M",
  authDomain: "first-coffee-store.firebaseapp.com",
  projectId: "first-coffee-store",
  storageBucket: "first-coffee-store.firebasestorage.app",
  messagingSenderId: "760690330390",
  appId: "1:760690330390:web:c40c38bd3389fea34d9e37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);