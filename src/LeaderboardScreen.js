import React from 'react'
import './LeaderboardScreen.css';
export default function LeaderboardScreen({ winnerList, winner, onReset }) {


    const numAscending = [...winnerList].sort((a, b) => b.score - a.score);
    const top5 = numAscending.slice(0, 5);


    return (
        <>
            <div>
                Leaderboard
                {top5.map(player => (
                    <div className="leaderboard" key={player.id}>
                        Name: {player.name} Score: {player.score} wins: {player.wins} losses: {player.losses} draws: {player.draws}

                    </div>
                ))}
                <button className='button-restart' onClick={onReset}>Start Again</button>
            </div>

        </>
    )
}
