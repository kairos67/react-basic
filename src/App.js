import React, { useState } from 'react';
import Movie from './components/Movie';

function App() {
  const movies = [
    { title: 'kairos 1', year: 2001 },
    { title: 'kairos 2', year: 2002 },
    { title: 'kairos 3', year: 2003 },
  ];
  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title}/>
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
