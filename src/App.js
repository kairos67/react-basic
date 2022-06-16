import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  const renderCondition = condition
    ? 'True' : 'False';
  return (
    <div className="App">
      <h1>Kairos Coder</h1>
      <Counter click="click1" />
      <Counter />
      <div>{renderCondition}</div>

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
