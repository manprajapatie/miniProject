import React from 'react'
import { useReducer } from 'react'

const UseReducer = () => {
    const initialStage = {count:0}
    const [state, dispatch] = useReducer(reducer, initialStage)

    function reducer(state, action){

        switch (action.type){
            case 'incr':
                return {count : state.count  + 1};
            case 'decr':
                return {count : state.count  - 1};
            case 'reset':
                return {count : 0};

        }

    }

  return (
    <>
    <h1>Count {state.count}</h1>
      <button onClick={()=> dispatch({type : 'incr'})}>+</button>
      <button onClick={()=> dispatch({type : 'decr'})}>-</button>
      <button onClick={()=> dispatch({type : 'reset'})}>reset</button>
    </>
  )
}

export default UseReducer
