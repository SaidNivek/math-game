import Numbers from './Numbers'
import Functions from './Functions'
import CurrentMath from './CurrentMath'
import PreviousMath from './PreviousMath'
import GameInfo from './GameInfo'
import Submit from './Submit'

function GameScreen() {

  return (
    <>
        <GameInfo />
        <Functions />
        <Numbers />
        <CurrentMath />
        <Submit />
    </>
  )
}

export default GameScreen