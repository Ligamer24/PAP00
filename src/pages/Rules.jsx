import "../Rules.css"
import r1Img from "../Images/school.png"
import r2Img from "../Images/dependable.png"


export default  function Rules() {
    return (
        <>
            <h1 id="title">Regras</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Regra 1</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Apenas quem faz parte da <u><i>ESP</i></u> pode jogar!</p>
                            <p>És aluno(a), docente ou não docente? Força! Estás à vontade de jogar!</p>
                        </div>
                        <img src={r1Img} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Regra 2</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Esta competição depende de ti.</p>
                            <p>Caso já saibas a resposta em alguma adivinha, evita dá-la diretamente a outra pessoa.</p>
                            <p>Assim deixas a competição justa e amigável!</p>
                        </div>
                        <img src={r2Img} alt=""/>
                    </div>
                </div>

                <div id="rule">
                    <h2>Regra 3</h2>
                    <div id="info">
                        <div id="desc">
                            <p></p>
                        </div>
                        <img src={r1Img} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Regra 4</h2>
                    <div id="info">
                        <div id="desc">
                            <p></p>
                        </div>
                        <img src={r1Img} alt=""/>
                    </div>
                </div>
                
            </div>
        </>
    )
}