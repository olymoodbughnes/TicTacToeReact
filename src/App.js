import SplashScreen from './SplashScreen';
import './App.css';

function App() {
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
              <div className='buffer'></div>
              <SplashScreen />
              <div className='buffer'></div>
            </div>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
