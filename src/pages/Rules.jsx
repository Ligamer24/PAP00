import "../Rules.css"
import r1Img from "../Images/school.png"
import r2Img from "../Images/dependable.png"
import r3Img from "../Images/swearing.png"
import r4Img from "../Images/password.png"


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
                            <p>Basta entrares com o email da escola.</p>
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
                            <p>Tens a liberdade de escolher o teu username.</p>
                            <p>Fá-lo com atenção, não necessitas de colocar nomes desnecessários nele!</p>
                            <p>Confio em ti!</p>
                        </div>
                        <img src={r3Img} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Regra 4</h2>
                    <div id="info">
                        <div id="desc">
                            <p>O jogo ocorre apenas no rés do chão da escola</p>
                            <p>O código pode estar tanto em objetos, locais ou pessoas</p>
                            <p>Existe uma exceção em relação a uma minoria das quadras</p>
                            <p>Nesses casos, pensa bem na adivinha pois o código não é fisico</p>
                        </div>
                        <img src={r4Img} alt=""/>
                    </div>
                </div>
                
            </div>
        </>
    )
}