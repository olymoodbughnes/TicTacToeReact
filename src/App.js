import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import NameScreen from './NameScreen';
import './App.css';
import React, { useState } from 'react';

function App() {


  const [clicked, setClicked] = useState(false);
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [showNameScreen, setShowNameScreen] = useState(false);
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState('ref_a');
  const [player2, setPlayer2] = useState('ref_b');
  const handleClick = () => {
    setClicked(true);
    setShowNameScreen(true);


  };

  const handleNamesSet = (pl1, pl2) => {
    setPlayer1(pl1);
    setPlayer2(pl2);
    setShowGameScreen(true);
    setShowNameScreen(false);
  };

  const handleGameComplete = (winner) => {
    setWinner(winner);
    setShowGameScreen(false);

  };





  return (
    <div className="App">
      <header className="header">
        <div className="main-content">
          <div className='navbar'>
            <article className='options'>
              <section className='Logo'>IMG</section>
              <section className='options-action'>Options</section>
              <section className='options-action'>Help</section>
              <section className='extra-action'>empty space</section>
            </article>
          </div>
          <div className='game-content'>
            <div className='content-display'>


              {!clicked ? <SplashScreen onClick={handleClick} /> : null}
              {showNameScreen ? <NameScreen onNamesSet={handleNamesSet} /> : null}
              {showGameScreen ? <GameScreen player1={player1} player2={player2} onGameCompleted={handleGameComplete} /> : null}
              {winner}
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
