import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvNv7NZOPCYbrYhBAKrXmi7m6Kbo0GAkg",
  authDomain: "mywhatsapp-8b47e.firebaseapp.com",
  projectId: "mywhatsapp-8b47e",
  storageBucket: "mywhatsapp-8b47e.appspot.com",
  messagingSenderId: "1093875339718",
  appId: "1:1093875339718:web:eb3088edc9e55546c462c7",
  measurementId: "G-Z6M7FS1GYV"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



