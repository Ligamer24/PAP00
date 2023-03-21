import "../Leaderboard.css"
import { getUsers } from "../Firebase"

export default function Leaderboard() {
    
    return (
        <>
        <h1 id="title">Leaderboard</h1>
        <table>
            
            <tbody>
                <tr className="headRow">
                    <th><h1>#</h1></th>
                    <th><h1>Nome</h1></th>
                    <th><h1>Turma</h1></th>
                    <th><h1>Pontos</h1></th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>{userData.Name}</td>
                    <td>{userData.Class}</td>
                    <td>{userData.Score}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

const userData = await getUsers()
console.log(userData)


