import "./Main.css";
import { Link } from "react-router-dom";
import trophy from "./Images/trophy.png";

export default function Main() {
  return (
    <div className="main">
      <h1>Bem-Vindo Jogador(a)</h1>
      <div className="content">
        <img src={trophy} alt="" />
        <div className="desc">
          <Link to="/leaderboard">Pontos</Link>
          <Link to="/rules">Regras</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </div>
    </div>
  );
}
