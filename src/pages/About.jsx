import { Link } from "react-router-dom"
import { useState } from "react"
import "../About.css"
import img1 from "../Images/calendar.png"
import img2 from "../Images/team.png"

export default  function About() {
    const [but1, setBut1] = useState(false)
    const [but2, setBut2] = useState(false)
    const [but3, setBut3] = useState(false)

    function handleClick1() {
        setBut1(!but1)
    }
    
    function handleClick2() {
        setBut2(!but2)
    }

    function handleClick3() {
        setBut3(!but3)
    }
    return (
        <>
            <h1 id="title">Sobre</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Isto? Um jogo!</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Porque não tornar o quotidiano da escola um pouco mais divertido?</p>
                            <p>Até ao fim do 3º periodo podes participar e jogar!</p>
                            <p>
                                Não há horas definidas para jogar, portanto se te der a vontade de explorar este jogo enquanto
                                ficas no intervalo <del>ou na aula</del>, o que te impede de experimentar?
                            </p>

                        </div>
                        <img src={img1} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Para quem?</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Este jogo é destinado a ti, portanto se quiseres experimentar fica à vontade!</p>
                            <p>Gostas de competir? Mostra quem manda no quadro de pontos!</p>
                            <p>Pessoa casual? Tens a liberdade de ir nas calmas e chegar ao fim sem pressas.</p>
                            <p></p>
                        </div>
                        <img src={img2} alt=""/>
                    </div>
                </div>

                <div id="rule">
                    <h2>Como funciona?</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Primeiro, como qualquer competição, existe regras.<br/> Não precisas de vê-las, mas se quiseres dar uma vista de olhos, vai à página <Link to="/rules">Regras</Link> para te enquadrares.</p>
                            <div id="infoButtons">
                                <button id="but1" onClick={handleClick1}><p><u>Como Participar</u></p></button>
                                {but1 && (<div id="desc1">
                                    <p>Então, para começares a jogar tens primeiro que criar uma conta no jogo. Apenas precisas de entrar com o email da escola e a tua conta será criada.</p>
                                    <p>Após teres entrado com a tua conta, aparecerá o teu email escrito na barra do topo.</p>
                                    <p>Assim já podes aceder à tua área de jogador(a)!</p>
                                    <p>Também terás o nome que colocaste no <Link to="/leaderboard">quadro de pontos</Link>.</p>
                                </div>)}
                                <button id="but2" onClick={handleClick2}><p><u>Zona de Jogador</u></p></button>
                                {but2 && (<div id="desc2">
                                    <p>Após teres entrado com a tua conta, podes aceder à tua área (ou zona) de jogador(a)</p>
                                    <p>Para entrares, existe na barra do topo algo para clicares... tenta encontrar!</p>
                                    <p>A zona de jogador(a) é onde podes ver o teu progresso e ler a quadra em que estás!</p>
                                    <p>Se tiveres um palpite ou tenhas encontrado o código, é onde podes introduzi-lo.</p>
                                    <ul>
                                        <li><p>✓ Caso o código esteja correto, ganharás pontos baseado em quantas pessoas conseguiram antes de ti.</p></li>
                                        <br/>
                                        <li><p>🗴 Caso o código esteja errado, aparecerá uma janelazinha a avisar que o mesmo está errado.</p></li>
                                    </ul>
                                </div>)}
                                <button id="but3" onClick={handleClick3}><p><u>Quadro de Pontos</u></p></button>
                                {but3 && (<div id="desc3">
                                    <p>Um ótimo sítio para garantir em que posição estás e verificar quem está na frente é o quadro de pontos!</p>
                                    <p>É nele que podes gabar-te o quão bem estás na competição!</p>
                                </div>)}
                            </div>
                        </div>
                        {/* <iframe src="https://www.youtube.com/embed/0mqqbuM9sAk" title="I Built 4 Businesses In A Row To Show It&#39;s Not Luck" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                    </div>
                </div>
                
            </div>
        </>
    )
}

