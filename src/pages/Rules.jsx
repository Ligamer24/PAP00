import "../Rules.css"
import r1Img from "../Images/keyword.png"


export default  function Rules() {
    return (
        <>
            <h1 id="title">Regras</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Regra 1</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Apenas quem faz parte  <u><i>ESP</i></u> pode jogar!</p>
                            <p>És alun@, professor@ ou funcionári@? Força! Estás à vontade de jogar!</p>
                        </div>
                        <img src={r1Img} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Regra 2</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Lorem Ispum Lorem Ispum Lorem Ispum</p>
                            <p>Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum Lorem Ispum</p>
                        </div>
                        <img src={r1Img} alt=""/>
                    </div>
                </div>
                
            </div>
        </>
    )
}