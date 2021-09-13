import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  lastCounter: 1,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }

    case 'decrement':
      return { ...state, lastCounter: state.lastCounter - action.value }

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
      <button onClick={() => dispatch({ type: 'increment', value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default CounterTwo
