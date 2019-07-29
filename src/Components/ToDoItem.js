import React from "react";
import "./ToDoItem.css";

function ToDoItem(props) {
  const completedStyle = {
    textDecoration: "line-through",
    color: "#cecece",
    fontStyle: "italic"
  };
  return (
    <div className="todo-item ">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default ToDoItem;
