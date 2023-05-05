import "../Leaderboard.css"
import { getUsers } from "../Firebase"

export default function Leaderboard() {

    function insertPlayer(userData) {
        var userRow = []
        
        for (var i = 0; i < userData.length; i++) {
            userRow.push(
                <tr key={userData[i].Name}>
                <td>{i + 1}</td>
                <td>{userData[i].Name}</td>
                <td>{userData[i].Class}</td>
                <td>{userData[i].Score}</td>
                </tr>)
            
        }
        return userRow;
    }
    
    
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
                {insertPlayer(userData)}
            </tbody>
        </table>
        {(insertPlayer(userData).length === 0) && <h1 style={{textAlign:"center"}}>Sem jogadores...</h1>}
        </>
    )
}

const userData = await getUsers()
//console.log(userData)

