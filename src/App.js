import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import './App.css';
import React, { useState } from 'react';

function App() {


  const [clicked, setClicked] = useState(false);
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState('uno');
  const [player2, setPlayer2] = useState('dos');
  const handleClick = () => {
    setClicked(true);
    setShowGameScreen(true);

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
