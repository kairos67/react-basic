import React, {useState} from 'react';

function App() {
  const [text, setText] = useState('Hello, world');

  const onSubmit = ()=>{
    alert('onSubmited');
  };
  const onKeyUp = (event)=>{
    if(event.keyCode ===13){
      onSubmit();
    }
    console.log('onKeyUp');
  }

  //let text = 'Hello';
  const updateText = ()=>{
    //text = 'Kairos';
    setText('Kairos');
  }
  return (
    <div className="App">
      <h1>Kairos Coder</h1>
            <input onKeyUp={onKeyUp} onSubmit={onSubmit}/>
      <button onClick={onSubmit}>Submit</button>
      <br /> <br /> 

      <span>{text}</span>
      <button onClick={updateText}>Update</button>  
    </div>
  );
}

export default App;
