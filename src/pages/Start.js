import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Game from "./Game"

const Start = () => {
  const navigate = useNavigate

  const navigateToGame = () => {
    navigate('/game')
  }

  return (
    <div>
      <h1>Start Page</h1>
      <p>
        Click the Button Below to Start the Game!
      </p>
      <div>
        <button className='btn btn-success' onClick={navigateToGame}>Game</button>

      </div>

    </div>
  )
}

export default Start