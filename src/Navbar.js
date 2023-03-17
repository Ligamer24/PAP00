import "./Navbar.css";
import logo from "./Images/winner.png";
import { Link } from "react-router-dom";
import { googleAuth } from "./Firebase";


export default function Navbar({ userInfo }) {
  return (
    <>
    {console.log(button())}
      <div className="navbar">
        <button onClick={googleAuth}>{userInfo ? userInfo.displayName : "Login"}</button>
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

function button() {
  
}


