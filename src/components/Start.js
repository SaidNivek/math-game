import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <h1>Start Page</h1>
      <p>
        Click the Button Below to Start the Game!
      </p>
      <Link to="/boxes"><button>
        Go to
        </button></Link>
    </div>

  )
}

export default Header