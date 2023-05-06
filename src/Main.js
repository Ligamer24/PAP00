import "./Main.css";
import { Link } from "react-router-dom";
import start from "./Images/start-button.png";
import arrow from "./Images/arrow.png"

export default function Main() {
  return (
    <>
    <h1 id="title">Home</h1>
    <div className="main">
      <h1>Bem-Vindo Jogador(a)</h1>
      <div className="content">
        {/* <Link to=""><img src={start} alt="" /></Link> */}
        <div className="desc">
          <Link to="/leaderboard"><img src={arrow} width={"3vw"} alt="" />Pontos</Link>
          <Link to="/rules"><img src={arrow} width={"3vw"} alt="" />Regras</Link>
          <Link to="/about"><img src={arrow} width={"3vw"} alt="" />Sobre</Link>
        </div>
      </div>
    </div>
    </>
  );
}
