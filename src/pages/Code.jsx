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
    const oldPScore = useRef(undefined)
    const input = useRef(undefined)

    let listener = onAuthStateChanged(auth, async (user) => {
        if (user) {
            userData.current = user
            const playerData = await getCurrentUser(user.uid);
            //console.log(playerData)
            setPCue(playerData.Cue)
            setPScore(playerData.Score)
            setPName(playerData.Name)
                     
        } else {
            console.log("Not signed in!")
        }
    })
    
    listener()

    const cue = cues[pCue ? pCue - 1 : console.log("sem index")] 

    function codeRight(username, score) {
        console.log(pScore, oldPScore)
        return (
            <>
                <p>Muito bem {username}!</p>
                <p>Ganhaste {score === 0 ? "" : score} pontos!</p>
                
                <p>Passaste para a fase seguinte!</p>
                <div id="cue">
                    <p>Para o jogo continuar,<br />
                    Apenas precisas de recarregar</p>
                </div>
            </>
        )
    }

    function handleClick() {
        (cue[4] === "playername") && (cue[4] = pName);

        if (input.current.value.toLowerCase() === cue[4].toLowerCase()) {
            input.current.value = ""
            oldPScore.current = pScore
            setIsCodeRight(true)
            updatePlayerData(pScore, pCue, userData.current)
        } else {
            window.alert("Código errado!")
        }
    }


    return (
    <>
        {pCue !== 11 ? (<>
            <h1 id="title">Codigo[{pCue}/10]</h1>
            <div id="rulesContainer">

                <div id="rule">
                    <h2>Encontraste?</h2>
                    <div id="info">
                        <div id="desc">
                            {!isCodeRight && (
                            <>
                                <input placeholder="Insere o codigo!" ref={input}/>
                                <button onClick={handleClick}>Verificar</button>
                            </>
                            )
                            }
                            {isCodeRight && codeRight(pName, pScore - oldPScore.current)}
                        </div>
                        <img src={img1} alt=""/>
                    </div>
                </div>

                <div id="rule2">
                    <h2>Quadra</h2>
                    <div id="cue">
                            {pCue ? 
                                (<p id="cue-text">
                                
                                    {cue[0]}<br/>
                                    {cue[1]}<br/>
                                    {cue[2]}<br/>
                                    {cue[3]}<br/>
                                </p>) : <p id="cue-text">Loading</p>
                            }
                            
                    </div>
                </div>
                <div id="rule">
                    <h2>Perfil</h2>
                    <div id="info">
                        <div id="profile-desc">
                            <div>
                            <p>Username: {pName}</p>
                            <p>Pontos: {pScore}</p>
                            <p>Quadra: {pCue}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>) : (
            <div style={{height: "100vh"}}>
                <h1 id="title">WOW!</h1>
                <div id="rulesContainer">
                    <div id="rule">
                        <h2>Inacreditavel!</h2>
                        <div id="info">
                            <div id="desc">
                                <p>Inexplicável!</p>
                                <p>Parabéns!</p>
                                <div id="cue">
                                    <p>Excelente! Grande conquista.<br />
                                    Tentativas ficam em ti protagonista,<br />
                                    Não desististe, continuaste avante,<br />
                                    Os meus 1000 obrigados pelo teu esforço constante<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
    )
}