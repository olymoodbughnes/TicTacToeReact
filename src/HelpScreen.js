import React, { useState } from 'react'
import './HelpScreen.css'
export default function HelpScreen({ returnToGame }) {



    return (



        <div className='overlay-help' onClick={returnToGame}>

            <article className='base'>
                <section className='first-paragraph'>In the game of Tic Tac Toe, you have a 3x3 grid right in front of you, just like a neat tic-tac-toe board on paper. Two players are ready to square off and here's how they go about it:

                    Player 1 gets the "X" marker, while Player 2 gets the "O" marker. Think of these markers like your initials on the grid.</section>

                <section className='spacer'>X</section>
                <section className='spacer'>O</section>
                <section className='second-paragraph'>Taking turns is the name of the game. Player 1 begins by placing their "X" or "O" in an empty square on the grid. Then, Player 2 takes their turn, filling another square.

                    Both players are on a mission: they want to get three of their markers in a row. That row can go straight up and down, across left to right, or diagonally from corner to corner. It's like making a path of your symbols to triumph.</section>

                <section className='second-paragraph'>As the game progresses, keep a close eye on your rival. Are they trying to complete their three-marker row before you? Or can you outmaneuver them and form your row first?

                    The game continues until one player lines up three of their markers in a row, or until all the squares on the grid are taken. If neither player has three in a row at that point, the game ends in a friendly tie.</section>

                <section className='spacer'>X</section>

            </article>






        </div>
    )
}
