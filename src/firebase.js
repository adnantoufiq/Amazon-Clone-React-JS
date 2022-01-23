import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBut-Dk-3m0e9pUCJKBqW-T5pOD7zU4OR4",
  authDomain: "clone-ed34b.firebaseapp.com",
  projectId: "clone-ed34b",
  storageBucket: "clone-ed34b.appspot.com",
  messagingSenderId: "282214296429",
  appId: "1:282214296429:web:3bc5c7d01ba5e23186c864",
  measurementId: "G-K6MXWHEVB2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
console.log(auth);
