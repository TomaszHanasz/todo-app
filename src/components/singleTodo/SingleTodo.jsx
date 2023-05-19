import React from "react";
import "./singleTodo.style.css";

const SingleTodo = (props) => {
  return (
    <div className="single-todo-box">
      <p>{props.todoText}</p>
      <button>Delete</button>
    </div>
  );
};

export default SingleTodo;
