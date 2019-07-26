import React from "react";
//import "./App.css";
import "./Components/ToDoItem.css";
import ToDoItem from "./Components/ToDoItem";
import tododata from "./Components/tododata";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: tododata
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div class="todo-list">{todoItems}</div>;
  }
}

export default App;
