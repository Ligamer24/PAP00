import "../Code.css"
import { cues } from "../Firebase"
import img1 from "../Images/secure.png"

export default function Code() {
    const cue = cues[0]
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
                            <p id="cue-text">
                                {cue[0]}<br/>
                                {cue[1]}<br/>
                                {cue[2]}<br/>
                                {cue[3]}<br/>
                            </p>
                    </div>
                </div>
            </div>
        </>
    )
}