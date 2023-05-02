import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCarbhEEpYnWIGy7so_FDJagUHJqiQvAPE",
  authDomain: "reddit-fd6e2.firebaseapp.com",
  projectId: "reddit-fd6e2",
  storageBucket: "reddit-fd6e2.appspot.com",
  messagingSenderId: "967512741346",
  appId: "1:967512741346:web:8e6cdeb58b239dd53855bb",
  measurementId: "G-XHZRJSS1TR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
