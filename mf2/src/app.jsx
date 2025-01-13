import React from 'react';

import Style from './style.css';

const App = ({completed=[],pending=[]}) => {

  return (
    <div className={'mf2'}>
      <h2>Completed - {completed.length}</h2>
      <h2>Pending - {pending.length}</h2>
    </div>
  );
};

export default App;