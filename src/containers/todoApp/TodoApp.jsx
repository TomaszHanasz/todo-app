import React, { useState } from "react";
import SingleTodo from "../../components/singleTodo/SingleTodo";
import TodoInput from "../../components/todoInput/TodoInput";
import "./todoApp.style.css";

const defaultTodoList = [];

const TodoApp = () => {
  const [todoList, setTodoList] = useState(defaultTodoList);

  const addTodoHandleri = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1>Todo App</h1>
        <TodoInput addTodoHandler={addTodoHandleri} />
        <div className="todo-list">
          <h1>Your todos:</h1>
          {todoList.map((el, index) => {
            return <SingleTodo todoText={el} key={index} />;
          })}
          {!todoList.length && <p className="note-text">Todo list is empty</p>}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
