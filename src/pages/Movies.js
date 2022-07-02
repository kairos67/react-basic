import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForms';

const Movies = () => {
     // const [movieTitle, setMovieTitle] = useState('');
  // const [movieYear, setMovieYear] = useState('');
  const [movies, setMovies] = useState([
    // { title: 'kairos 1', year: 2001 },
    // { title: 'kairos 2', year: 2002 },
    // { title: 'kairos 3', year: 2003 }
  ]);

  const removeMovie = (id) => {
    // console.log(id);
    setMovies(movies.filter(m => {
      return m.id !== id;
    }))
  };

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}
      />
    );
  }) : '추가된 영화가 없습니다.';
  const addMovie = (movie) => {
    // console.log(movieTitle,movieYear);
    setMovies([
      ...movies, //기존값을 유지
      movie
    ]);
  };
    return (
        <div>
            <h1>Movie list</h1>
            < MovieForm addMovie={addMovie} />
            {renderMovies}
        </div>
    )
};

export default Movies;