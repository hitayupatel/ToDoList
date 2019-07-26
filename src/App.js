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
  }
  render() {
    const todoItems = this.state.todos.map(item => (
      <ToDoItem key={item.id} item={item} />
    ));
    return <div class="todo-list">{todoItems}</div>;
  }
}

export default App;
