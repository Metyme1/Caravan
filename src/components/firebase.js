import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIvJlbrqhlIUiygYEkQ5FzHa0piyIEIYY",
  authDomain: "caravandire.firebaseapp.com",
  projectId: "caravandire",
  storageBucket: "caravandire.appspot.com",
  messagingSenderId: "736135451829",
  appId: "1:736135451829:web:9243d7e0d4c1dce02e1afc",
  measurementId: "G-VE7QE7220E"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };