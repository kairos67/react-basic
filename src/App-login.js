import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    //여기서 username, password를 DB서버에서 조회하여 로그인체크함.
    event.preventDefault();
    console.log(username,password)
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)} /><br />
        <input
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)} /><br />

        <button type="submit" >Login</button>
      </form>
    </div>
  );
}

export default App;
