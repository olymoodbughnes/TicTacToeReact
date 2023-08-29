import React, { useState, useEffect } from 'react';
import './GameScreen.css';
export default function GameScreen({ player1, player2, onGameCompleted }) {

    const cross = 'x';
    const circle = 'o';






    const [clicked, setClicked] = useState({ b1: false, b2: false, b3: false, b4: false, b5: false, b6: false, b7: false, b8: false, b9: false });
    const [symbolMap, setSymbolMap] = useState({ b1: ' ', b2: ' ', b3: ' ', b4: ' ', b5: ' ', b6: ' ', b7: ' ', b8: ' ', b9: ' ' });
    const [currPlayer, setCurrentPlayer] = useState(player1);
    const [currSymbol, setCurrentSymbol] = useState();
    const allBoxesClicked = Object.values(clicked).every(value => value);

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


        if (!clicked.b2 && boxKey === 'b2') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b2: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b2: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b2: true,
            }));

        }

        if (!clicked.b3 && boxKey === 'b3') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b3: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b3: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b3: true,
            }));

        }

        if (!clicked.b4 && boxKey === 'b4') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b4: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b4: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b4: true,
            }));

        }

        if (!clicked.b5 && boxKey === 'b5') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b5: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b5: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b5: true,
            }));

        }

        if (!clicked.b6 && boxKey === 'b6') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b6: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b6: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b6: true,
            }));

        }

        if (!clicked.b7 && boxKey === 'b7') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b7: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b7: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b7: true,
            }));

        }

        if (!clicked.b8 && boxKey === 'b8') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b8: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b8: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b8: true,
            }));

        }

        if (!clicked.b9 && boxKey === 'b9') {
            if (currPlayer === player1) {

                setCurrentSymbol(cross);
                setCurrentPlayer(player2);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b9: cross,
                }));

            } else if (currPlayer === player2) {

                setCurrentSymbol(circle);
                setCurrentPlayer(player1);
                setSymbolMap((oldState) => ({
                    ...oldState,
                    b9: circle,
                }));
            }

            setClicked((oldState) => ({
                ...oldState,
                b9: true,
            }));

        }




    };

    useEffect(() => {

        checkRows();

    }, [clicked])


    const checkRows = () => {
        const tl = symbolMap.b1;
        const tm = symbolMap.b2;
        const tr = symbolMap.b3;
        const ml = symbolMap.b4;
        const mm = symbolMap.b5;
        const mr = symbolMap.b6;
        const bl = symbolMap.b7;
        const bm = symbolMap.b8;
        const br = symbolMap.b9;
        var winningPlayer = '';
        const noWinner = 'DRAW';

        if (currPlayer === player1) {
            winningPlayer = player2;
        } else {

            winningPlayer = player1;

        }
        if ((tl === 'x' && tm === 'x' && tr === 'x') || (tl === 'o' && tm === 'o' && tr === 'o')) {
            onGameCompleted(winningPlayer);
        }
        else if ((ml === 'x' && mm === 'x' && mr === 'x') || (ml === 'o' && mm === 'o' && mr === 'o')) {
            onGameCompleted(winningPlayer);
        }
        else if ((bl === 'x' && bm === 'x' && br === 'x') || (bl === 'o' && bm === 'o' && br === 'o')) {
            onGameCompleted(winningPlayer);
        }
        else if ((tl === 'x' && ml === 'x' && bl === 'x') || (tl === 'o' && ml === 'o' && bl === 'o')) {
            onGameCompleted(winningPlayer);
        } else if ((tm === 'x' && mm === 'x' && bm === 'x') || (tm === 'o' && mm === 'o' && bm === 'o')) {
            onGameCompleted(winningPlayer);
        } else if ((tr === 'x' && mr === 'x' && br === 'x') || (tr === 'o' && mr === 'o' && br === 'o')) {
            onGameCompleted(winningPlayer);
        } else if ((bl === 'x' && mm === 'x' && tr === 'x') || (bl === 'o' && mm === 'o' && tr === 'o')) {
            onGameCompleted(winningPlayer);
        } else if ((br === 'x' && mm === 'x' && tl === 'x') || (br === 'o' && mm === 'o' && tl === 'o')) {
            onGameCompleted(winningPlayer);
        } else if (allBoxesClicked) {
            onGameCompleted(noWinner);
        }


    }



    return (
        <div className='ttt-table'>
            {/*TOP ROW*/}
            <article className='row-one'>


                <section className='sq top-left' onClick={() => { handleClick('b1'); }} >{clicked.b1 ? <div>{symbolMap.b1}</div> : null}</section>
                <section className='sq top-mid' onClick={() => { handleClick('b2'); }} >{clicked.b2 ? <div>{symbolMap.b2}</div> : null}</section>
                <section className='sq top-right' onClick={() => { handleClick('b3'); }} >{clicked.b3 ? <div>{symbolMap.b3}</div> : null}</section>
            </article>
            {/*MID ROW*/}
            <article className='row-two'>
                <section className='sq mid-left' onClick={() => { handleClick('b4'); }}>{clicked.b4 ? <div>{symbolMap.b4}</div> : null}</section>
                <section className='sq mid-mid' onClick={() => { handleClick('b5'); }} >{clicked.b5 ? <div>{symbolMap.b5}</div> : null}</section>
                <section className='sq mid-right' onClick={() => { handleClick('b6'); }} >{clicked.b6 ? <div>{symbolMap.b6}</div> : null}</section>
            </article>
            {/*BOTTOM ROW*/}
            <article className='row-three'>
                <section className='sq bot-left' onClick={() => { handleClick('b7'); }} >{clicked.b7 ? <div>{symbolMap.b7}</div> : null}</section>
                <section className='sq bot-mid' onClick={() => { handleClick('b8'); }} >{clicked.b8 ? <div>{symbolMap.b8}</div> : null}</section>
                <section className='sq bot-right' onClick={() => { handleClick('b9'); }} >{clicked.b9 ? <div>{symbolMap.b9}</div> : null}</section>
            </article>
        </div>
    )
}

//123 456 789 741 852 963 159