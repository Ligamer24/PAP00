import { useState } from "react";
import "./Navbar.css";
import logo from "./Images/Logo1.png";
import arrow from "./Images/arrow.png";
import { Link } from "react-router-dom";
import { auth, addUserToDb} from "./Firebase";
import { GoogleAuthProvider, signOut, signInWithRedirect, getRedirectResult, onAuthStateChanged} from "firebase/auth";

export default function Navbar() {
  const [userData, setUserData] = useState(null);

  function googleAuth() {
    signInWithRedirect(auth, new GoogleAuthProvider());
  }

  let listener = onAuthStateChanged(auth, async (user) => {
    console.log(user)
    user.email.split("@")[1] === "espeniche.pt" ? setUserData(user) : setUserData(null)
  })

  listener()

getRedirectResult(auth)
.then((result) => {
  // The signed-in user info.
  const user = result.user;

  //Email Check
  var userDomain = user.email.split("@")
  userDomain = userDomain[1]

  if (userDomain === "espeniche.pt") {
    console.log("Email da escola!")
    setUserData(user)

  } else {
    window.alert("Usa o email da escola!")
    setUserData(null)
    return
  }

  user.metadata.creationTime === user.metadata.lastSignInTime ? addUserToDb(user): console.log("Já tem conta!")
  console.log("Sign In succesful!")


}).catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;

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

function showLogoMessage() {
  alert("Dá Login para entrares aqui...")
}


  return (
    
    <>
      <div className="navbar">
      <button onClick={userData ? userSignOut : googleAuth}><img src={arrow} alt="" />{userData ? userData.email : "Login"}</button>

        {userData ? <Link to="/code"><img src={logo} alt=""/></Link> : <Link to="/"><img src={logo} alt="" onClick={showLogoMessage}/></Link>}
        <div className="pages">
          <Link to="/"><img src={arrow} alt="" />Home</Link>
          <Link to="/leaderboard"><img src={arrow} alt="" />Pontos</Link>
          <Link to="/rules"><img src={arrow} alt="" />Regras</Link>
          <Link to="/about"><img src={arrow} alt="" />Sobre</Link>
        </div>
      </div>
    </>
  );
}