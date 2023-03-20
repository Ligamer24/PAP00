import { useState } from "react";
import "./Navbar.css";
import logo from "./Images/winner.png";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from "firebase/auth";



export default function Navbar() {
  const [userData, setUserData] = useState(null)

  function googleAuth() {
    signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
 
    setUserData(user)
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

function userSignOut() {
  signOut(auth).then(() => {
    setUserData(null)
    console.log("Sign out succesful!")
    

  }).catch((error) => {
    console.log("An error happened...")
  })
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    
    console.log("onAuth a funcionar!", user)
    setUserData(user)
    // ...
  } else {
    console.log("onAuth a funcionar, user nao esta conectado!")
    setUserData(null)
  }
})

  return (
    
    <>
      <div className="navbar">
      <button onClick={userData ? userSignOut : googleAuth}>{userData ? userData.displayName : "Login"}</button>

        <img src={logo} />
        <div className="pages">
          <Link to="/">Home</Link>
          <Link to="/leaderboard">Pontos</Link>
          <Link to="/rules">Regras</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </div>
    </>
  );
}

