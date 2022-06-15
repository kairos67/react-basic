import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [kairos, setKairos] = useState(0);
  useEffect(() => {
    console.log(count)    
  },[count,kairos]);
  
  const increment = () => {
    setCount(count+1);
  }
  return (
    <div className="App">
      <h1>Kairos Coder</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setKairos(kairos+1)}>Increment1</button>
    </div>
  );
}

export default App;
