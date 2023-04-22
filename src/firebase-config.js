import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWXlk4OUQWLxz0V2d1vCGcAGfH6rf4sGA",
  authDomain: "reddit-clone-8437c.firebaseapp.com",
  projectId: "reddit-clone-8437c",
  storageBucket: "reddit-clone-8437c.appspot.com",
  messagingSenderId: "553356355136",
  appId: "1:553356355136:web:7340058e35111cdec861a5",
  measurementId: "G-CQ4V379V9G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
