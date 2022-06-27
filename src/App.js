import React, { useState } from 'react';
import Movie from './components/Movie';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    { title: 'kairos 1', year: 2001 },
    { title: 'kairos 2', year: 2002 },
    { title: 'kairos 3', year: 2003 }
  ]);
  // const movies = [
  //   { title: 'kairos 1', year: 2001 },
  //   { title: 'kairos 2', year: 2002 },
  //   { title: 'kairos 3', year: 2003 },
  // ];
  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title} />
    );
  });
  const addMovie = (event) => {
    event.preventDefault();
    // console.log(movieTitle,movieYear);
    setMovies([
      ...movies, //기존값을 유지
      { 
      title: movieTitle, 
      year: movieYear 
    }]);
    setMovieTitle('');
    setMovieYear('');
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder='영화제목'
          onChange={e => setMovieTitle(e.target.value)}
        /> <br />
        <input
          type="text"
          value={movieYear}
          placeholder='개봉년도'
          onChange={e => setMovieYear(e.target.value)}
        /> <br />
        <button type='submit'>영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
