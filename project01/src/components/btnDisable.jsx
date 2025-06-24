import React, { useState } from 'react'

const BtnDisable = () => {
  const [input, setInput] = useState('')
  const [data, setAlldata] = useState([])

  const handleAdd = () => {
    if (input.trim() !== '') {
      setAlldata([...data, input])
      setInput("")
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder='Type'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleAdd}
      >
        Input daloge to hi chalungi
      </button>

      <div>
       {data.map((valueOfInput, index)=>(
        <div>
        <p>{index + 1}</p>
        <p>{valueOfInput}</p>
       </div>
       ))}
      </div>
    </>

    
  )
}

export default BtnDisable
