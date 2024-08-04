// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF5fq_XWP03xOM7GNjdWSs6iQaRV165vY",
  authDomain: "inventory-management-a1c8c.firebaseapp.com",
  projectId: "inventory-management-a1c8c",
  storageBucket: "inventory-management-a1c8c.appspot.com",
  messagingSenderId: "591322346012",
  appId: "1:591322346012:web:45537756f2b107b63725d9",
  measurementId: "G-56831CDN3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}