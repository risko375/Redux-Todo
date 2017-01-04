
// child reducer of todos returns a new todo action and a toggled todo action
const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return ({...state, 
        completed: !state.completed})
    

    default:
      return state
  }
}

// todos reducer returns new todo action by calling todo and combining with current state and 
// a toggled action by mapping over state and applying todo to match state.id with todo id and then changing boolean value

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos