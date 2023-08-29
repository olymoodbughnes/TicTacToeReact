import React, { useState, useRef } from 'react';
import './NameScreen.css';
export default function NameScreen({ onNamesSet }) {


    const [player1Name, setPlayer1Name] = useState(true);
    const [player2Name, setPlayer2Name] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [playerNames, setPlayerNames] = useState({ p1: '', p2: '' });
    const firstPlayerName = useRef();
    const secondPlayerName = useRef();

    const handleClick = (e) => {

        const firstName = firstPlayerName.current.value;

        setPlayerNames((oldState) => ({
            ...oldState,
            p1: firstName,
        }));


        setPlayer1Name(false);
        setPlayer2Name(true);

    };

    const handleClick2 = (e) => {

        const secondName = secondPlayerName.current.value;

        setPlayerNames((oldState) => ({
            ...oldState,
            p2: secondName,
        }));



        setPlayer2Name(false);
        setShowConfirmation(true);
    };



    const handleClick3 = (e) => {


        onNamesSet(playerNames.p1, playerNames.p2);
    };



    return (
        <>

            <div>
                {player1Name ? <><input ref={firstPlayerName} type="text" className='name-input1'></input> <button className='button-names' onClick={handleClick}>Confirm Player 1 Name</button></> : null}
                {player2Name ? <><input ref={secondPlayerName} type="text" className='name-input2'></input> <button className='button-names' onClick={handleClick2}>Confirm Player 2 Name</button></> : null}
                {showConfirmation ? <><div className='player1-name-show'>{playerNames.p1}</div> vs <div className='player2-name-show'>{playerNames.p2}</div> <button className='button-names' onClick={handleClick3}>START GAME</button> </> : null}
            </div>
            <div className='buffer'></div>
        </>
    )
}

