// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCwRdvjE5m34dzqsKPyCrayku1aVnVINM",
  authDomain: "chaos-chat-1eec3.firebaseapp.com",
  projectId: "chaos-chat-1eec3",
  storageBucket: "chaos-chat-1eec3.appspot.com",
  messagingSenderId: "406740260813",
  appId: "1:406740260813:web:30505f39ff47062205d684",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
