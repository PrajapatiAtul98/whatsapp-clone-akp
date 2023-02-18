import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// const firebaseConfig = {
//   apiKey: "AIzaSyAx-CXwjko0ZgkJwmMD0IBMnNrQo_CNXH0",
//   authDomain: "whatsapp-clone-akp.firebaseapp.com",
//   projectId: "whatsapp-clone-akp",
//   storageBucket: "whatsapp-clone-akp.appspot.com",
//   messagingSenderId: "561118535481",
//   appId: "1:561118535481:web:189020fd23ba074a8e92e8"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAx-CXwjko0ZgkJwmMD0IBMnNrQo_CNXH0",
  authDomain: "whatsapp-clone-akp.firebaseapp.com",
  projectId: "whatsapp-clone-akp",
  storageBucket: "whatsapp-clone-akp.appspot.com",
  messagingSenderId: "561118535481",
  appId: "1:561118535481:web:189020fd23ba074a8e92e8"
};

//this will connect everything
const firebaseApp = firebase.initializeApp(firebaseConfig); 

// //this is for database connection
const db = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();


export { auth,authProvider }
export default db;



