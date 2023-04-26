import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATicdj53UKQxLU8Hy5Gy2YozxVY-xwfmA",
  authDomain: "chat-app-e6fa7.firebaseapp.com",
  projectId: "chat-app-e6fa7",
  storageBucket: "chat-app-e6fa7.appspot.com",
  messagingSenderId: "220019087977",
  appId: "1:220019087977:web:e0909a1357013fea28e0f8",
  measurementId: "G-F2XNYWRZ3Q"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



