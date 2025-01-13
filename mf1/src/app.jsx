import React, { useState } from 'react';
import Style from './style.css';

const App = ({todo = [], setTodo, pending, setPending, completed,setCompleted }) => {   
  const [task, setTask] = useState("");

   function handleClick() {
    if (task.trim() !== "") {  
      setTodo([...todo, task]);
      setTask("");
    }
  }

   function handleDelete(index) {
    const updatedTodo = todo.filter((item, i) => i !== index);  
    setCompleted([ ...completed, todo[index] ]);
    setTodo(updatedTodo);
    setPending(updatedTodo);
    console.log("completed->",completed,completed.length);
    
  }

  console.log('todo->',todo);  
  // console.log(setTodo);  
  
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
              <input type="checkbox" />
              <span>{item}</span>
              <button onClick={() => handleDelete(index)}>Delete</button> 
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default App;
