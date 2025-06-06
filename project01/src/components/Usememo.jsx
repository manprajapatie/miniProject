import React from 'react'
import { useState, useMemo } from "react";

const Usememo = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);


  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };


  //Defination
  //when any of state is updated the whole component is re-rendered even if this is not releted to each other to prevend this unwanted re-render we use useMemo that will memorize it's previous value and only update it's value when actual changes happen in it's state.
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <div>
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </div>
  )
}

export default Usememo
