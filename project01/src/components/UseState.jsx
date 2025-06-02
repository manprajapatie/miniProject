import React from 'react'
import { useState } from 'react'

const UseState = () => {
  // let [count, setCount] = useState(0)
  let [initial, setInitial] = useState("this is initial stage or default")

  return (
    <>
      {/* <h1>{count}</h1>
      <button onClick={() => {
        setCount(++count)
      }}>
        increase
      </button> */}

      <h1>{initial}</h1>

    </>
  )
}

export default UseState
