            [reduce in Javascript]
                array.reduce(reducer, initialValue)

returns => singleValue = reducer(accumulator, itemValue)
  reduce method returns a single value

                [useReducer in React]
                    useReducer(reducer, initialState)

returns => newState = reducer(currentState, action)
useReducers returns a pair of values [newState, dispatch]
