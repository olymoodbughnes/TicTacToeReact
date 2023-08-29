import React, { useState, useRef } from 'react';

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
        <div>
            {player1Name ? <><input ref={firstPlayerName} type="text"></input> <button onClick={handleClick}>Confirm First Name</button> </> : null}
            {player2Name ? <><input ref={secondPlayerName} type="text"></input><button onClick={handleClick2}>Confirm Second Name</button></> : null}
            {showConfirmation ? <><div>{playerNames.p1}{playerNames.p2}</div> <button onClick={handleClick3}>START GAME</button> </> : null}
        </div>
    )
}

