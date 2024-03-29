import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAajq08xdQYYoLLb0Pd-bIg2LY0SBWY_kA",
  authDomain: "whatsssappp-50965.firebaseapp.com",
  projectId: "whatsssappp-50965",
  storageBucket: "whatsssappp-50965.appspot.com",
  messagingSenderId: "1057050482081",
  appId: "1:1057050482081:web:4d94d312be79aded8e67e0",
  measurementId: "G-L4K7CLGC4D"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



