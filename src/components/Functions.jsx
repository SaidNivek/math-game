import React from 'react'
import Card from 'react-bootstrap/Card'
import AddFunction from './AddFunction'
import SubtractFunction from './SubtractFunction'
import SplitFunction from './SplitFunction'

function Functions() {
  return (
    <div className='d-flex justify-content-evenly mt-3'>
        <AddFunction />
        <SplitFunction />
        <SubtractFunction />
    </div>
  )
}

export default Functions