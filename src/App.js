import FanfareScreen from './FanfareScreen';
import SplashScreen from './SplashScreen';
import GameScreen from './GameScreen';
import NameScreen from './NameScreen';
import LeaderboardScreen from './LeaderboardScreen';
import './App.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {


  const [clicked, setClicked] = useState(false);
  const [showGameScreen, setShowGameScreen] = useState(false);
  const [showNameScreen, setShowNameScreen] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showFanfare, setShowFanfare] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showHelp, setShowHelp] = useState(false);
  const [winner, setWinner] = useState(null);
  const [loser, setloser] = useState(null);
  const [isDraw, setsIsDraw] = useState(false);

  const [player1, setPlayer1] = useState('ref_a');
  const [player2, setPlayer2] = useState('ref_b');



  const LOCAL_STORAGE_KEY2 = 'stats.point'




  const handleClick = () => {
    setClicked(true);
    setShowNameScreen(true);


  }



  const handleResetClick = () => {
    setClicked(false);
    setShowLeaderboard(false);


  };;


  // Load leaderboard from local storage when the component mounts
  useEffect(() => {
    const storedLeaderboard = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY2));
    if (storedLeaderboard) {
      setLeaderboard(storedLeaderboard);
    }
  }, []);

  // Save leaderboard to local storage whenever it changes
  useEffect(() => {

    if (leaderboard.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY2, JSON.stringify(leaderboard));
    }
  }, [leaderboard]);


  const handleNamesSet = (pl1, pl2) => {
    setPlayer1(pl1);
    setPlayer2(pl2);
    setShowGameScreen(true);
    setShowNameScreen(false);
  };


  const handleGameEnd = (winner, loser) => {

    const winnerPlayer = leaderboard.find(player => player.name === winner);
    const loserPlayer = leaderboard.find(player => player.name === loser);

    if (winnerPlayer) {

      winnerPlayer.wins++;
      winnerPlayer.score = ((winnerPlayer.wins * 1000) - (winnerPlayer.losses * 500)) + (winnerPlayer.draws * 150)

    } else {
      setLeaderboard(prevLeaderboard => [
        ...prevLeaderboard,
        { id: uuidv4(), name: winner, wins: 1, losses: 0, draws: 0, score: 1000 },
      ]);


    }

    if (loserPlayer) {

      loserPlayer.wins++;
      loserPlayer.score = ((loserPlayer.wins * 1000) - (loserPlayer.losses * 500)) + (loserPlayer.draws * 150)

    } else {
      setLeaderboard(prevLeaderboard => [
        ...prevLeaderboard,
        { id: uuidv4(), name: loser, wins: 0, losses: 1, draws: 0, score: 0 },
      ]);


    }
  }


  const handleDrawGameEnd = (winner, loser) => {

    const winnerPlayer = leaderboard.find(player => player.name === winner);
    const loserPlayer = leaderboard.find(player => player.name === loser);

    if (winnerPlayer) {

      winnerPlayer.draws++;
      winnerPlayer.score = ((winnerPlayer.wins * 1000) - (winnerPlayer.losses * 500)) + (winnerPlayer.draws * 150)
    } else {

      setLeaderboard(prevLeaderboard => [
        ...prevLeaderboard,
        { id: uuidv4(), name: winner, wins: 0, losses: 0, draws: 1 },
      ]);

    }

    if (loserPlayer) {

      loserPlayer.draws++;
      loserPlayer.score = ((loserPlayer.wins * 1000) - (loserPlayer.losses * 500)) + (loserPlayer.draws * 150)
    } else {


      setLeaderboard(prevLeaderboard => [
        ...prevLeaderboard,
        { id: uuidv4(), name: loser, wins: 0, losses: 0, draws: 1 },
      ]);
    }






  }

  const handleGameComplete = (winner, loser, draw) => {
    if (draw) {
      setsIsDraw(true);
      setWinner(winner);
      setloser(loser);
      handleDrawGameEnd(winner, loser);
      setShowGameScreen(false);
      setShowFanfare(true);
      return;
    }
    setsIsDraw(false);
    setWinner(winner);
    setloser(loser);
    handleGameEnd(winner, loser);
    setShowGameScreen(false);
    setShowFanfare(true);

  };

  const handleShowLeaderBoard = () => {
    setShowFanfare(false);
    setShowLeaderboard(true);


  };


  const handleHelp = () => {
    setShowHelp(true);


  }


  return (
    <div className="App">
      <header className="header">
        <div className="main-content">
          <div className='navbar'>
            <article className='options'>
              <section className='Logo'>IMG</section>
              <section className='options-action' onClick={handleHelp}>Help</section>
              <section ></section>
            </article>
          </div>
          <div className='game-content'>
            <div className='content-display'>


              {!clicked ? <SplashScreen onClick={handleClick} /> : null}
              {showNameScreen ? <NameScreen onNamesSet={handleNamesSet} /> : null}
              {showGameScreen ? <GameScreen player1={player1} player2={player2} onGameCompleted={handleGameComplete} /> : null}
              {showFanfare ? <FanfareScreen winner={winner} isDraw={isDraw} onFinish={handleShowLeaderBoard} /> : null}
              {showLeaderboard ? <LeaderboardScreen winnerList={leaderboard} winner={winner} onReset={handleResetClick} /> : null}
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
//{showLeaderboard ? <LeaderboardScreen winnerList={leaderboard} winner={winner} /> : null}