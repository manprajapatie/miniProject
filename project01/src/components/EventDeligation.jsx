import React from 'react'
import { useState } from 'react';

const EventDeligation = () => {

  const [color, setColor] = useState("")

  const handleColor = (e)=>{
    if(e.target.tagName === "LI"){
      const data = e.target.getAttribute("ram")
      setColor(data)
    }

  
  }

let a = [2]


  return (

    <>
    <div style={{
      width: "200px",
      height: "100px",
      backgroundColor: color,
      border: "2px solid red"

    }}>

    </div>
     
     <ul onClick={handleColor}>
      <li ram="blue">blue</li>
      <li ram="red">red</li>
      <li ram="black">black</li>
     </ul>
      
    </>
  )
}

export default EventDeligation
