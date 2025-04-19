import React, { useState } from 'react'

export default function InputField() {
  const [count,setCount] = useState(0);

  const counterIncrement=()=>{
    setCount(count+1)
  }
  const counterDecrement=()=>{
    setCount(count-1)
  }

  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={counterIncrement}>Increment</button>
      <button onClick={counterDecrement}>Decrement</button>

    </div>
  )
}