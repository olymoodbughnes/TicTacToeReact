import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import './App.css';
import React, { useState } from 'react';

function App() {


  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);


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


              {!clicked ? <SplashScreen onClick={handleClick} /> : <GameScreen />}

            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
