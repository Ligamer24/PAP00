import { useState } from "react";
import "./Navbar.css";
import logo from "./Images/winner.png";
import { Link } from "react-router-dom";
import { googleAuth, userSignOut } from "./Firebase";



export default function Navbar({ userInfo }) {
  

  return (
    <>
      <div className="navbar">
        <Button user={userInfo} />

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

function Button({user}) {

  //const [signIn, setSignIn] = useState(false)

  console.log("user:", user)

    return (
      <button onClick={user ? userSignOut : googleAuth}>{user ? user.displayName : "Login"}</button>
    )
}

