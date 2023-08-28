import React, { useState } from 'react';
import './GameScreen.css';
export default function GameScreen({ player1, player2 }) {

    const cross = 'x';
    const circle = 'o';






    const [clicked, setClicked] = useState({ b1: false, b2: false, b3: false, b4: false, b5: false, b6: false, b7: false, b8: false, b9: false });
    const [symbolMap, setSymbolMap] = useState({ b1: ' ', b2: ' ', b3: ' ', b4: ' ', b5: ' ', b6: ' ', b7: ' ', b8: ' ', b9: ' ' });
    const [currPlayer, setCurrentPlayer] = useState(player1);
    const [currSymbol, setCurrentSymbol] = useState();

    const handleClick = (boxKey) => {

        if (!clicked.b1 && boxKey === 'b1') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b1: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b1: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b1: true,
            }));

        }
    };


    return (
        <div className='ttt-table'>
            {/*TOP ROW*/}
            <article className='row-one'>

                <section className='sq top-left' onClick={() => handleClick('b1', currSymbol)}>{clicked.b1 ? <div>{currSymbol}</div> : null}</section>
                <section className='sq top-mid' onClick={handleClick}>{clicked.b2 ? <div>{currSymbol}</div> : null}</section>
                <section className='sq top-right'>{symbolMap.b1}</section>
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
