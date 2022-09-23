// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ijwoQ0zywfk64E_SpXrBMUl0qySqd04",
  authDomain: "chat-5221d.firebaseapp.com",
  projectId: "chat-5221d",
  storageBucket: "chat-5221d.appspot.com",
  messagingSenderId: "981468383806",
  appId: "1:981468383806:web:8e706482a295f4609bdf6f",
  measurementId: "G-G8LHYJ69FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);