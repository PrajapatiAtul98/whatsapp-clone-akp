import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA9AMtSiw9ZKSJgByvI4vghyv-Hbka5TnE",
  authDomain: "whatspp-chat.firebaseapp.com",
  projectId: "whatspp-chat",
  storageBucket: "whatspp-chat.appspot.com",
  messagingSenderId: "239697615263",
  appId: "1:239697615263:web:35041d7493b40f4ab485aa",
  measurementId: "G-QE50BD2VVM"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



