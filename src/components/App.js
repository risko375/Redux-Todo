// Main App component nests child components, 
// AddTodo displays input field
// VisibleTodoList shows the filtered list of Todos
// Footer displays filter options
// Not concerned with state


import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
