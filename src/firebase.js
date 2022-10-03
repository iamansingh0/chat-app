import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDznF5UKtvZgxPBgNyjj_RkpGY3BXqaidM",
  authDomain: "chat-app-a8b6c.firebaseapp.com",
  projectId: "chat-app-a8b6c",
  storageBucket: "chat-app-a8b6c.appspot.com",
  messagingSenderId: "313206852846",
  appId: "1:313206852846:web:4950d853df12b9eb99b7ff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
