import React, { useEffect, useState } from 'react';

import Movie from '../Movie/Movies.component';

import { getMovies } from '../../services/getMovies';

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    getMovies().then(({ results }) => {
      const dataSorted = results.sort(
        (a: any, b: any) => a.episode_id - b.episode_id,
      );

      setMovies(dataSorted);
    });
  }, [movies]);

  return (
    <main>
      {movies.map((movie: any) => (
        <Movie key={movie.episode_id} movie={movie} />
      ))}
    </main>
  );
};

export default MovieList;
