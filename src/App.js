import React from 'react'
import todosData from './components/todosData'
import TodoItem from './components/TodoItem'
import Test from './components/Test'

import './App.css'
import './css/Mainwrap.css'
import './css/todoItem.css'
const toggleToDo = id => {
    const updateState = (prevState) => {
        const updatedTodos = prevState.todos.map(todo => {
            todo = JSON.parse(JSON.stringify(todo))
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {todos: updatedTodos} 
    }
    return updateState
}


class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    const stateUpdater = toggleToDo(id)
    this.setState(stateUpdater)
}
  
  render() {
    //   return (<Test/>)
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      
      
      return (
          <div className="main-wrap">
              {todoItems}
          </div>
      )    
  }
}

export default App
