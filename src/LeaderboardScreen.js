import React from 'react'
import './LeaderboardScreen.css';
export default function LeaderboardScreen({ winnerList, winner, onReset }) {


    const numAscending = [...winnerList].sort((a, b) => b.score - a.score);
    const top5 = numAscending.slice(0, 5);


    return (
        <>
            <div className='col-structure'>
                <div className='buffer'></div>
                <div className='board-background'>
                    Leaderboard
                    {top5.map(player => (
                        <div className="leaderboard" key={player.id}>
                            Name: {player.name} <div className='score-highlight'>Score: {player.score}</div><div>wins: {player.wins} losses: {player.losses} draws: {player.draws}</div>

                        </div>
                    ))}
                    <button className='button-restart' onClick={onReset}>Start Again</button>
                </div>
                <div className='buffer'></div>
            </div>

        </>
    )
}
