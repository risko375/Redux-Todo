// visibilityFilter reducer has default state of 'SHOW_ALL' if action type is 'SET_VISIBILITY_FILTER'
// returns the filter clicked by user which will update state to just show the relevant todos

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter