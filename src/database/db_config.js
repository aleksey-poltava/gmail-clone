import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDZeTFlWZrAEaqKO8BRLfX48r2_Ubj6gMM",
  authDomain: "clone-f7ef3.firebaseapp.com",
  projectId: "clone-f7ef3",
  storageBucket: "clone-f7ef3.appspot.com",
  messagingSenderId: "1082509737880",
  appId: "1:1082509737880:web:bf0d2c179b158da62cb5ed"
};


// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export {db, firebase};