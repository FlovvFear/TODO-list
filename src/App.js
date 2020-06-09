import React from 'react'
import todosData from './components/todosData'
import TodoItem from './components/TodoItem'
import Test from './components/Test'

import './App.css'
import './css/Mainwrap.css'
import './css/todoItem.css'
const toggleToDo = id => {
    const updateState = (prevState) => {
        // счетчик
        let counterCompleted = 0;
        const updatedTodos = prevState.todos.map(todo => {
            todo = JSON.parse(JSON.stringify(todo))
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            // счетчик
            if (todo.completed) {
                counterCompleted++
            }
            return todo
        })
        // счетчик
        console.log(counterCompleted)
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
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    //   Не очень понимаю как работает handleChange={this.handleChange}
      return (
          <div className="main-wrap">
              {todoItems}
          </div>
      )    
  }
}

export default App
