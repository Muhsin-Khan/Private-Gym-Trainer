// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXD6V5qKiNhQQg0WYjSq19XIzq6zOS-qA",
  authDomain: "private-gym-trainer.firebaseapp.com",
  projectId: "private-gym-trainer",
  storageBucket: "private-gym-trainer.appspot.com",
  messagingSenderId: "1063274301392",
  appId: "1:1063274301392:web:7a84cd6929574f07959bd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

export default app;


