import React, { useState } from 'react';
import './GameScreen.css';
export default function GameScreen({ player1, player2 }) {

    const cross = 'x';
    const circle = 'o';






    const [clicked, setClicked] = useState(false);

    const [currPlayer, setCurrentPlayer] = useState(player1);
    const [currSymbol, setCurrentSymbol] = useState(cross);
    const [currSymbol2, setCurrentSymbol2] = useState(cross);
    const [currSymbol3, setCurrentSymbol3] = useState(cross);
    const [currSymbol4, setCurrentSymbol4] = useState(cross);
    const [currSymbol5, setCurrentSymbol5] = useState(cross);
    const [currSymbol6, setCurrentSymbol6] = useState(cross);
    const [currSymbol7, setCurrentSymbol7] = useState(cross);
    const [currSymbol8, setCurrentSymbol8] = useState(cross);
    const [currSymbol9, setCurrentSymbol9] = useState(cross);
    const handleClick = () => {

        if (!clicked) {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
            }

            setClicked(true);
        }


    };


    return (
        <div className='ttt-table'>
            {/*TOP ROW*/}
            <article className='row-one'>
                <section className='sq top-left' onClick={handleClick}>{clicked ? <div>{currSymbol}</div> : null}</section>
                <section className='sq top-mid' onClick={handleClick}>{clicked ? <div>{currSymbol}</div> : null}</section>
                <section className='sq top-right'>allo m7</section>
            </article>
            {/*MID ROW*/}
            <article className='row-two'>
                <section className='sq mid-left'>allo m7</section>
                <section className='sq mid-mid'>allo m7</section>
                <section className='sq mid-right'>allo m7</section>
            </article>
            {/*BOTTOM ROW*/}
            <article className='row-three'>
                <section className='sq bot-left'>allo m7</section>
                <section className='sq bot-mid'>allo m7</section>
                <section className='sq bot-right'>allo m7</section>
            </article>
        </div>
    )
}
