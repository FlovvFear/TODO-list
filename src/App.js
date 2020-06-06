import React from 'react';
import todosData from './components/todosData'
import TodoItem from './components/TodoItem'
import './App.css';
import './css/Mainwrap.css';
import './css/todoItem.css';

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(id) {
    console.log(id)
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                console.log(todo.completed)
                console.log(id)
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      
      return (
          <div className="main-wrap">
              {todoItems}
          </div>
      )    
  }
}

export default App
