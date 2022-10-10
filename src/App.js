import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MyButton from './components/MyButton';
import Start from "./pages/Start"
import Game from './pages/Game';

function App() {
  return (
    <div className='app'>
      <Router>
        <MyButton to="game" />

        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
