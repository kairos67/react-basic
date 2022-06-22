import React, { useState } from 'react';

function App() {
  const movies = [
    { title: 'kairos 1', year: 2001 },
    { title: 'kairos 2', year: 2002 },
    { title: 'kairos 3', year: 2003 },
  ];
  const renderMovies = movies.map(m => {
    return(
      <div className="movie" key={m.title}>
      <div className="movie-title">{m.title}</div>
      <div className="movie-year">{m.year}</div>
    </div>
      );
    });
  return (
    <div className="App">
      <h1>Movie list</h1>
      {renderMovies}
    </div>
  );
}

export default App;
