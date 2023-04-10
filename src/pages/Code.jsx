import "../Code.css"
import img1 from "../Images/secure.png"

export default function Code() {
    return (
        <>
            <h1 id="title">Codigo</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Encontraste?</h2>
                    <div id="info">
                        <div id="desc">
                            <input placeholder="Insere o codigo!"/>
                        </div>
                        <img src={img1} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Quadra</h2>
                    <div id="cue">
                            <p>
                                Se vencer o jogo é o que anseias<br/>
                                Os dez desafios terás que enfrentar<br/>
                                Para a tua jornada começar<br/>
                                No site terás que entrar
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
}