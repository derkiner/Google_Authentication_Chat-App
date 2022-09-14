// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb4j3uKwShqEkpuT8tlPn58aioF-a7tbw",
  authDomain: "chat-app-yt-efe5d.firebaseapp.com",
  projectId: "chat-app-yt-efe5d",
  storageBucket: "chat-app-yt-efe5d.appspot.com",
  messagingSenderId: "974220871707",
  appId: "1:974220871707:web:2492683383c571cc4810be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
