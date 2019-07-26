import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div className="todo-item ">
      <p>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <label>{props.item.text}</label>
      </p>
    </div>
  );
}

export default ToDoItem;
