import { useState } from "react";
import "./Navbar.css";
import logo from "./Images/winner.png";
import { Link } from "react-router-dom";
import { auth, addUserToDb} from "./Firebase";
import { GoogleAuthProvider, signInWithPopup, signOut, signInWithRedirect, getRedirectResult} from "firebase/auth";




export default function Navbar() {
  const [userData, setUserData] = useState(null)

  function googleAuth() {
    signInWithRedirect(auth, new GoogleAuthProvider());

    


    /*signInWithPopup(auth, new GoogleAuthProvider())
  .then((result) => {    
    const user = result.user;
    setUserData(user)
    user.metadata.creationTime === user.metadata.lastSignInTime ? addUserToDb(user): console.log("Já tem conta!")
    console.log("Sign In succesful!", user)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error:", errorCode, errorMessage, email, credential)
  });*/
}

getRedirectResult(auth)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access Google APIs.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  setUserData(user)
  user.metadata.creationTime === user.metadata.lastSignInTime ? addUserToDb(user): console.log("Já tem conta!")
  console.log("Sign In succesful!", user)

}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  console.log(error)

  if (errorCode) {
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("Error:", errorCode, errorMessage, email, credential)
  }
  
});

function userSignOut() {
  signOut(auth).then(() => {
    setUserData(null)
    console.log("Sign out succesful!")
    

  }).catch((error) => {
    console.log("An error happened:", error)
  })
}

  return (
    
    <>
      <div className="navbar">
      <button onClick={userData ? userSignOut : googleAuth}>{userData ? userData.email : "Login"}</button>

        <img src={logo} alt=""/>
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