import { initializeApp } from "firebase/app";
import { collection, doc, getFirestore, setDoc, getDoc, getDocs, query, orderBy, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


var blockedLetters = "éêèúûùíîìóôòõáâàãç~^´`"
blockedLetters = blockedLetters.split("")

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



export async function updatePlayerData(score, cue, user) {
  console.log(user, score, cue)
  const scoreValue = await getScoreValue(cue)
  await updateDoc(doc(db, "users", user.uid), {
    Score: score + scoreValue,
    Cue: (cue !== 10) ? cue + 1 : cue 
  })
  console.log("A receber:", scoreValue)
}

async function getScoreValue(pCue) {
  const usersRef = collection(db, "users")
  const q = query(usersRef, orderBy("Cue", "desc"))
  const querySnapshot = await getDocs(q)
  let count = 0
  querySnapshot.forEach((doc) => {
    if (doc.data().Cue > pCue) {
      count += 1
      console.log(doc.data(), count)
    }
  })

  if (count > 10) {
    return 100;
  } else {
    return 1000 - 100*count;
  }
}

export async function getCurrentUser(userid) {
  const docRef = doc(db, "users", userid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("Sem user!");
    return null;
  };
}

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
  
  //Class
  var userClass = user.displayName.split(" ")
  userClass = userClass[userClass.length-1]

  //Student/Teacher Check
  var userEmail = user.email.split("@")
  var userEmailFH = userEmail[0];
  // eslint-disable-next-line
  +userEmailFH[userEmailFH.length-1] === +userEmailFH[userEmailFH.length-1] ? console.log("aluno") : userClass = "Professor@";

  //Username
  user.displayName = usernamePrompt()

  if (user.displayName) {
    await setDoc(doc(db, "users", user.uid), {
      Class: userClass,
      Name: user.displayName,
      Score: 0,
      Email: user.email,
      Cue: 1
    })
  } else console.log("Não colocou o username!")
  
}

function usernamePrompt() {
  let userDesiredName = undefined
  let userNameConfirm = false
  let blockedLetter = null

  while (userNameConfirm === false) {
    userDesiredName = prompt(blockedLetter ? (`'${blockedLetter}' não é uma letra válida no username! `) : "Insira o seu username:")
    userDesiredName = userDesiredName.replace(/\s/g, "");
    userNameConfirm = window.confirm(`'${userDesiredName}' é o username que quer? ATENÇÃO: CASO QUEIRAS MUDAR, TERÁS DE CONTACTAR COM O RESPONSÁVEL DO PROJETO`, false);

    let userDesiredNameLetters = userDesiredName.split("")
    console.log(userDesiredNameLetters)

    for (let i = 0; i < userDesiredNameLetters.length; i++) {
      for (let j = 0; j < blockedLetters.length; j++) {
        if (userDesiredNameLetters[i] === blockedLetters[j]) {
          console.log(userDesiredNameLetters[i])
          blockedLetter = userDesiredNameLetters[i]
          userNameConfirm = false
          break
        } else if (userDesiredNameLetters[i] === blockedLetters[j].toUpperCase()) {
          console.log(userDesiredNameLetters[i])
          blockedLetter = userDesiredNameLetters[i]
          userNameConfirm = false
          break
        } else {
          console.log("Sem problema!")
        }
      }
    }
  }
  return userDesiredName;
}