import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2kYnPPtojrp-ub3SwMcAs7VKnBbrAIJs",
  authDomain: "whatsapp-clone-chatapp-d62c3.firebaseapp.com",
  projectId: "whatsapp-clone-chatapp-d62c3",
  storageBucket: "whatsapp-clone-chatapp-d62c3.appspot.com",
  messagingSenderId: "1028303060284",
  appId: "1:1028303060284:web:b3822f29e72b94b3a3b239",
  measurementId: "G-1Y2Y3E6TSX"
};
//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



