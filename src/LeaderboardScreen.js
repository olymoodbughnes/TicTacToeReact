import React from 'react'

export default function LeaderboardScreen({ winnerList, winner, onReset }) {


    const numAscending = [...winnerList].sort((a, b) => b.score - a.score);
    const top5 = numAscending.slice(0, 5);


    return (
        <>
            <div>
                {winner}
                {top5.map(player => (
                    <div key={player.id}>
                        <p>ID: {player.id} Name: {player.name} Score: {player.score} wins: {player.wins} losses: {player.losses} draws: {player.draws}</p>

                    </div>
                ))}

            </div>
            <button onClick={onReset}></button>
        </>
    )
}
