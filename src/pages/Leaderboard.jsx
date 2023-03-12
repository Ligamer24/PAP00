import "../Leaderboard.css"


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
                    <td>Ligamer24</td>
                    <td>3ºSIS</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}




