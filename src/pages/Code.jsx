import "../Code.css"
import { cues } from "../Cues"
import { onAuthStateChanged } from "firebase/auth"
import { auth, getCurrentUser, updatePlayerData } from "../Firebase"
import img1 from "../Images/secure.png"
import { useState, useRef } from "react"


export default function Code() {
    const [pCue, setPCue] = useState(0);
    const [pScore, setPScore] = useState(0);
    const [pName, setPName] = useState(undefined);
    const [isCodeRight, setIsCodeRight] = useState(false)
    let userData = useRef(undefined)

    let listener = onAuthStateChanged(auth, async (user) => {
        if (user) {
            userData.current = user
            const playerData = await getCurrentUser(user.uid);
            console.log(playerData)
            setPCue(playerData.Cue)
            setPScore(playerData.Score)
            setPName(playerData.Name)
                     
        } else {
            console.log("Not signed in!")
        }
    })
    
    listener()

    function codeRight(username, score, cue, user) {
        updatePlayerData(score, cue, user)
        return (
            <>
                <p>Muito bem {username}!</p>
                <p>Ganhaste {score} pontos!</p>
            </>
        )
    }

    function handleChange(event) {
        let input = event.target.value
        console.log(event)
        if (input === "teste") {
            setIsCodeRight(true)
        }
        else {
            setIsCodeRight(false)
        }
    }

    const cue = cues[pCue]
    return (
        
        <>
            <h1 id="title">Codigo[{pCue}/9]</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Encontraste?</h2>
                    <div id="info">
                        <div id="desc">
                            {!isCodeRight && <input placeholder="Insere o codigo!" onChange={handleChange}/>}
                            {isCodeRight && codeRight(pName, pScore, pCue, userData.current)}
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
                <div id="rule">
                    <h2>Perfil</h2>
                    <div id="info">
                        <div id="desc">
                            <p>Username: {pName}</p>
                            <p>Pontos: {pScore}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}