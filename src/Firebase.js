import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup} from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRWM_5RUCNFfHv4ISjR0iKmSk8ORki9UY",
  authDomain: "projeto1-3eea1.firebaseapp.com",
  projectId: "projeto1-3eea1",
  storageBucket: "projeto1-3eea1.appspot.com",
  messagingSenderId: "404925885432",
  appId: "1:404925885432:web:ce59e394c76351f476440d",
  measurementId: "G-TKQDST0ZV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize FireStore
const db = getFirestore(app)
//Initialize Authentication
const auth = getAuth(app)




const docRef = doc(db, "users", "Leandro");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}








//Auth Listener
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("You are Logged in! ", user.displayName)
    //Aqui posso definir o nome, podendo pedir o username que gostaria de ter ao utilizador
    //userLog = true
    
  } else {
    console.log("You are not Logged in!")
  }
})

//Navbar Google Login
const provider = new GoogleAuthProvider()

export function googleAuth() {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}