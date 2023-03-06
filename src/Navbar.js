import "./Navbar.css";
import logo from "./Images/winner.png";
import { Link } from "react-router-dom";
import { googleAuth } from "./Firebase";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <button onClick={googleAuth}>Login</button>
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
