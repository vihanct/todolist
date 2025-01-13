import React, { useState } from 'react';
import Style from './style.css';

const App = ({ todo = [], setTodo, pending, setPending, completed, setCompleted }) => {
  const [task, setTask] = useState("");

  function handleClick() {
    if (task.trim() !== "") {
      setTodo([...todo, { text: task, completed: false }]);
      setTask("");
    }
  }

  function handleDelete(index) {
    const updatedTodo = todo.filter((item, i) => i !== index);
    setTodo(updatedTodo);
    updateTaskStatus(updatedTodo);
  }

  function handleCheckboxChange(index) {
    const updatedTodo = todo.map((item, i) => 
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodo(updatedTodo);
    updateTaskStatus(updatedTodo);
  }

  function updateTaskStatus(updatedTodo) {
    const completedTasks = updatedTodo.filter(item => item.completed);
    const pendingTasks = updatedTodo.filter(item => !item.completed);
    setCompleted(completedTasks);
    setPending(pendingTasks);
  }

  console.log('todo->', todo);

  return (
    <div className={'mf1'}>
      <h1>Todo</h1>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        type="text"
      />
      <button onClick={handleClick}>Add</button>
      <div>
        {
          todo.map((item, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span>{item.text}</span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
