import React, { useState } from 'react'

export default function InputField() {
  const [text,setText] = useState('sample');

  const updateHandler=(event)=>{
    setText(event.target.value)
  }

  return (
    <div>
      <h2>Enter the input:</h2>
      <input type='text' value={text} onChange={updateHandler}/>
      <p>Entered input is {text} </p>

    </div>
  )
}
