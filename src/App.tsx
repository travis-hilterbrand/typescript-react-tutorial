import React, { useState } from 'react';
import './App.css';

import TestComponent from './TestComponent';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <TestComponent
        id={'test'}
        label={'Enter string'}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
      <h4>Reflected value</h4>
     [{value}]
    </div>
  );
}

export default App;
