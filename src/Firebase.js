import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const app = initializeApp({
  apiKey: "AIzaSyBRWM_5RUCNFfHv4ISjR0iKmSk8ORki9UY",
  authDomain: "projeto1-3eea1.firebaseapp.com",
  projectId: "projeto1-3eea1",
  storageBucket: "projeto1-3eea1.appspot.com",
  messagingSenderId: "404925885432",
  appId: "1:404925885432:web:ce59e394c76351f476440d",
  measurementId: "G-TKQDST0ZV0"
});

//Initialize FireStore
const db = getFirestore(app)
//Initialize Authentication
export const auth = getAuth(app)




const docRef = doc(db, "users", "Leandro");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}





export const user = auth.currentUser


if (user) {
  console.log("You're Loged in!", user.displayName)
} else {
  console.log("Sem Login")
}



//Navbar Google Login



