import { useState } from "react"
import React from 'react'

export const Counter = () => {
const [count, setCount] = useState(0);

const upper =()=>{
   setCount (count +1 )
}


  return (
    <div>
        <div>{count}</div>
        <button onClick={upper}>Add</button>
    
    </div>
  )
}

export default Counter;
