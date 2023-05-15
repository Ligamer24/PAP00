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
      <iframe width="1122" height="631" src="https://www.youtube.com/embed/zGaDzjYaXtU?showinfo=0&;modestbranding=1" title="Eternal Quest - Trailer" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
