import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyATicdj53UKQxLU8Hy5Gy2YozxVY-xwfmA",
//   authDomain: "chat-app-e6fa7.firebaseapp.com",
//   projectId: "chat-app-e6fa7",
//   storageBucket: "chat-app-e6fa7.appspot.com",
//   messagingSenderId: "220019087977",
//   appId: "1:220019087977:web:e0909a1357013fea28e0f8",
//   measurementId: "G-F2XNYWRZ3Q"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDmu6dohh-7vhYCC_B02S4eBuULAzWqTfE",
  authDomain: "mywhatsapp-7a16f.firebaseapp.com",
  projectId: "mywhatsapp-7a16f",
  storageBucket: "mywhatsapp-7a16f.appspot.com",
  messagingSenderId: "524167696040",
  appId: "1:524167696040:web:50087c81ca7f8e3a373c9d",
  measurementId: "G-4V3VT1NTJH"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



