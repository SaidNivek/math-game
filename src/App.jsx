import './App.css';
import GameScreen from './components/GameScreen';

function App() {
  return (
    <>
      <main className='container'>
        <h1 className='d-flex justify-content-center'>Math Game</h1>
        <GameScreen />
      </main>
    </>
  );
}

export default App;
