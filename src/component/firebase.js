import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCfvr4ZwG3REXxyENaU-06In5FBffFd4Y4",
  authDomain: "mychatapp-8b23b.firebaseapp.com",
  projectId: "mychatapp-8b23b",
  storageBucket: "mychatapp-8b23b.appspot.com",
  messagingSenderId: "615754854273",
  appId: "1:615754854273:web:8c7b9cebe2fcfa7a2b4280",
  measurementId: "G-VL1K5387YQ"
};
//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



