// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs73BI2SGLbZ9Ovh_mwS71nj9FwtY7Pd0",
  authDomain: "imdad-by-saad.firebaseapp.com",
  projectId: "imdad-by-saad",
  storageBucket: "imdad-by-saad.firebasestorage.app",
  messagingSenderId: "523553279520",
  appId: "1:523553279520:web:e2c7736055b83860f2b645"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth =getAuth(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
})
// export const database = getDatabase(app);
export const db = getFirestore(app);