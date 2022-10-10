import React from 'react'
import Box from '@material-ui/core/Box'

const Game = () => {
  return (
    <div>
      <h1>Game</h1>
      <p>Welcome to .... your time has started. Good Luck!</p>

      <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}>
        <Box color="white" bgcolor="palevioletred" p={1}>
          this is my box
        </Box>
      </div>
    </div>

  )
}

export default Game