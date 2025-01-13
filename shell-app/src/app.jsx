import React, { useState } from 'react';

import style from './style.css';
import AppFromMf1 from 'mf1/App';
import AppFromMf2 from 'mf2/App';
const App = () => {

  const[todo,setTodo]=useState([]);
  const[pending,setPending]=useState([]);
  const[completed,setCompleted]=useState([]);
  const [isResult,setResult]=useState(false);
  return (
    <>

    <div className='parent'>
      <div >
      <h1>ToDo App -- {todo.length}</h1>
      {/* <h1>Comple -- {completed.length}</h1> */}
      </div>

      <div className='container'>
        <nav>This is navbar</nav>
        {
          !isResult?( <AppFromMf1 todo={todo} setTodo={setTodo} 
            pending={pending} setPending={setPending}
            completed={completed} setCompleted={setCompleted}></AppFromMf1> ):(
              <AppFromMf2 completed={completed} pending={pending} />
            )
        }
         
      </div>
      <button onClick={()=>setResult(!isResult)}>Switch</button>
    </div>
 
    </>
  );
};

export default App;