import React from 'react'

const MyButton = ({ to }) => {
  return (
    <a href={`/${to}`}>
        <button className="btn btn-success">
            Start {to === '' ? "game" : to}
        </button>
    </a>
  )
}

export default MyButton