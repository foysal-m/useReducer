import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  lastCounter: 1,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + 1 }

    case 'decrement':
      return { ...state, lastCounter: state.lastCounter - 1 }

    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div> Count - {count.firstCounter}</div>
      <div>lastCounter - {count.lastCounter}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterTwo
