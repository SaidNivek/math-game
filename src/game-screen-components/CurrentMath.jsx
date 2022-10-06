import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'

function CurrentMath() {
    // Setup some dummy numbers for the game
    const [numbers, setNumbers] = useState([3,3,4,5])
    const [numbers2, setNumbers2] = useState([6,4,5])
    const [numbers3, setNumbers3] = useState([10,5])
    const [numbers4, setNumbers4] = useState([15])
  return (
    <>
      <div className='d-flex justify-content-evenly mt-3'>
      {numbers.map((number) => {
        return (
          <Card style={{ width:'4rem', border:'2px lightgrey solid'}}>
                  <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
              </Card>  
          )
        })}
      </div>
      <div className='d-flex justify-content-evenly mt-3'>
          {numbers2.map((number) => {
            return (
            <Card style={{ width:'4rem', border:'2px lightgrey solid'}}>
                <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
            </Card>  
          )
        })}
      </div>
      <div className='d-flex justify-content-evenly mt-3'>
          {numbers3.map((number) => {
            return (
            <Card style={{ width:'4rem', border:'2px lightgrey solid'}}>
                <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
            </Card>  
          )
        })}
      </div>
      <div className='d-flex justify-content-evenly mt-3'>
          {numbers4.map((number) => {
            return (
            <Card style={{ width:'4rem', border:'2px lightgrey solid', backgroundColor:'lightgreen'}}>
                <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
            </Card>  
          )
        })}
      </div>
      <p>When a unique correct answer is achieved, the game will play a jingle and/or animation, then add the variation to the # correct tracker, then reset.</p>
      <p>Do we want to have a maximum # correct that will display to the user when they've reached them ALL or allow them to go forever until the time runs out or they hit 'Submit'?</p>
      <p>It seems strange that the player could get all the answers and NOT be told they've got the correct answers.</p>
    </>
  )
}

export default CurrentMath