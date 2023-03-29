import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc, getDocs, query, orderBy } from "firebase/firestore";
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



export async function getUsers() {
  
  var usersArray = [];
  const usersRef = collection(db, "users");
  const q = query(usersRef, orderBy("Score", "desc"));
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    usersArray.push(doc.data())
  })
  return usersArray;
}

export async function addUserToDb(user) {
  var userClass = user.displayName.split(" ")
  userClass = userClass[userClass.length-1]
  let userDesiredName
  setTimeout(1000, userDesiredName = prompt("Insira o seu username:"));
  user.displayName = userDesiredName
  await setDoc(doc(db, "users", user.uid), {
    Class: userClass,
    Name: user.displayName,
    Score: 0
  })
}

