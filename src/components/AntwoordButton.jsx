import React from 'react'

export default function AntwoordButton(props) {

  const handleClick = () => {
    const isCorrect = props.isCorrect;
    props.onClick(isCorrect)
  }

  return (
    <button className='btn btn-primary'
      onClick={handleClick}
    >
      {props.naam}
    </button>


  )
}
