// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyRjGvq4grYui3jfdP3TI1bBsah7pusYk",
  authDomain: "projectwithmalika2.firebaseapp.com",
  projectId: "projectwithmalika2",
  storageBucket: "projectwithmalika2.appspot.com",
  messagingSenderId: "181733330005",
  appId: "1:181733330005:web:6e05f61c7e8db77fcb98dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app