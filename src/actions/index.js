// Action Creators

// Declaring variable to generate the todo id variable
let nextTodoId = 0

// addTodo action creator - returns action with type, generated id and text from input field
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}


// setVisibilityFilter action creator - returns action type and filter (All, Active, Completed clicked by user) 

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

// toggleTodo action creator - returns action type and todo id
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}