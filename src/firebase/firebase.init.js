// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaeG_SprMif_YoSm8062gWXCh7hV15XY",
  authDomain: "homenest-e1005.firebaseapp.com",
  projectId: "homenest-e1005",
  storageBucket: "homenest-e1005.firebasestorage.app",
  messagingSenderId: "931164349322",
  appId: "1:931164349322:web:c8b0157448437a5b1cde73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);