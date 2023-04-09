import "../About.css"
import img1 from "../Images/calendar.png"
import img2 from "../Images/team.png"

export default  function About() {
    return (
        <>
            <h1 id="title">Sobre</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Isto? Um jogo!</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Porque nao tornar o quotidiano da escola um pouco mais divertido?</p>
                            <p>Ate ao fim do 3º periodo podes participar e jogar!</p>
                            <p>
                                Inexiste horas definidas para jogar, portanto se te der a vontade de explorar este jogo enquanto
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
                            <p>Extendendo-se ao fim do 3º periodo, em qualquer altura podes entrar no jogo!</p>
                            <p>Gostas de competir? Mostra quem manda no quadro de pontos!</p>
                            <p>Pessoa casual? Tens a liberdade de ir nas calmas e poder chegar ao fim sem pressas.</p>
                            <p>Queres formar um grupo com @s amig@s? Embora tenha um pequeno porem, podes contar com isso!</p>
                            <p></p>
                        </div>
                        <img src={img2} alt=""/>
                    </div>
                </div>

                <div id="rule">
                    <h2>Como funciona?</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Extendendo-se ao fim do 3º periodo, em qualquer altura podes entrar no jogo!</p>
                            <p>Gostas de competir? Mostra quem manda no quadro de pontos!</p>
                            <p>Pessoa casual? Tens a liberdade de ir nas calmas e poder chegar ao fim sem pressas.</p>
                            <p>Queres formar um grupo com @s amig@s? Embora tenha um pequeno porem, podes contar com isso!</p>
                            <p></p>
                        </div>
                        <iframe src="https://www.youtube.com/embed/0mqqbuM9sAk" title="I Built 4 Businesses In A Row To Show It&#39;s Not Luck" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
                
            </div>
        </>
    )
}

