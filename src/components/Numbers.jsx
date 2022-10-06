import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

function Numbers() {

    // Setup some dummy numbers for the game
    const [numbers, setNumbers] = useState([1,2,3,4,5])
  return (
    <>
    {numbers.map((number) => {
        return (
            <Card style={{ width:'4rem', border:'2px lightgrey solid'}}>
                <Card.Body className='d-flex justify-content-center'>{number}</Card.Body>
            </Card>  
        )
    })}
    </>
  )
}

export default Numbers