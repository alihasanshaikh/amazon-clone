import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDKIKk2guqCp4WvzhgJH4K-E-ZtoE4Jhgc",
    authDomain: "project-a990e.firebaseapp.com",
    projectId: "project-a990e",
    storageBucket: "project-a990e.appspot.com",
    messagingSenderId: "247728611184",
    appId: "1:247728611184:web:bb6d12136c7b45ed5839b5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db , auth };