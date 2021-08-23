// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAGZUPwALylnZgbH2y9MU6A1Ujrmv4OMuU",
  authDomain: "whatsapp-clone-ccad9.firebaseapp.com",
  projectId: "whatsapp-clone-ccad9",
  storageBucket: "whatsapp-clone-ccad9.appspot.com",
  messagingSenderId: "405884741822",
  appId: "1:405884741822:web:cf2811ff5fa037f42016ef",
  measurementId: "G-6E5Z77T5Q0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
