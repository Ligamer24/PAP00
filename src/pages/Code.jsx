import "../Code.css"
import { cues } from "../Cues"
import { onAuthStateChanged } from "firebase/auth"
import { auth, getCurrentUser } from "../Firebase"
import img1 from "../Images/secure.png"
import { useState } from "react"


export default function Code() {
    const [pCue, setPCue] = useState(0);

    let listener = onAuthStateChanged(auth, async (user) => {
        if (user) {
            const playerData = await getCurrentUser(user.uid);
            console.log(playerData)
            setPCue(playerData.Cue)                             
            
        } else {
            console.log("Not signed in!")
        }
    })
    
    listener();

    const cue = cues[pCue]
    return (
        
        <>
            <h1 id="title">Codigo{pCue}</h1>
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