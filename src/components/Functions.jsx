import React from 'react'
import Card from 'react-bootstrap/Card'

function Functions() {
  return (
    <div className='d-flex justify-content-evenly mt-3'>
        <Card style={{width:'6rem', border:'2px lightgrey solid'}}>
            <Card.Body className='d-flex justify-content-center'>Add</Card.Body>
        </Card>
        <Card style={{width:'6rem', border:'2px lightgrey solid'}}>
            <Card.Body className='d-flex justify-content-center'>Split</Card.Body>
        </Card>
        <Card style={{width:'6rem', border:'2px lightgrey solid'}}>
            <Card.Body className='d-flex justify-content-center'>Subtract</Card.Body>
        </Card>
    </div>
  )
}

export default Functions