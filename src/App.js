import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Game from './pages/Game';
import Start from "./pages/Start"


function App() {
 
  return (
    <div className='App'>
        <>
      <Router>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Start />} />
        </Routes>
      </Router>
        </>
    </div>
  );
}


export default App;
