import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)
    const [Inc, setInc] = useState(2)

    function man(){
        return number * 2
    }

    let memo = useMemo(()=> man(number), [number])
  return (
    <>
    <h1>it is memorization {memo}</h1>
    <button onClick={()=> setCount(number + 1)}>count</button>
    <button onClick={()=> setInc(number + 1)}>Increase</button>
      
    </>
  )
}

export default Usememo
