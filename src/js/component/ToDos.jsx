import React, { useState } from "react";
import Inputs from "./Inputs.jsx";

const ToDos = () => {
  const [textEntered, setTextEntered] = useState("");
  const [tasks, setTasks] = useState([]);
  

  function inputValue(e) {
    const itemValue = e.target.value;
    setTextEntered(itemValue);
  }

  function addNewTask(e) {
    if (e.key === "Enter") {
      setTasks((current)=>{
       return [...current, textEntered]
      })
      setTextEntered("");
    }
  }

  function deleteTask(id) {
    setTasks((current)=>{
      return current.filter((item, index)=>{
        return index != id
      })
    })
  }

  return (
    <div>
      <h1 className="todo-header">Todos</h1>
      <div className="todos-container d-flex flex-column">
        <div className="todos-container-header d-flex flex-row">
          <span className="me-3">Tasks</span>
          <input
            type="text"
            onChange={inputValue}
            onKeyDown={addNewTask}
            value={textEntered}
          />
        </div>

        <div className="todos-container-body flex-grow-1">
          <ul>
            {tasks.map((task, index) => (
              <Inputs
                key={index}
                id={index}
                task={task}
                onDelete={deleteTask}
              />
            ))}
          </ul>
        </div>

        <div className="flex-grow-1">
           {tasks.length === 0
        ? "No tasks, add a task"
        : `Number of Tasks: ${tasks.length}`}
        </div>
      </div>
    </div>
  );
};

export default ToDos;