import React from 'react';

import Movies from '../Movie/Movies.component';

import { List } from './MovieList.styles';

const MovieList: React.FC = ({ movies }: any) => (
  <List>
    {movies.map((movie: any) => (
      <Movies key={movie.episode_id} movie={movie} />
    ))}
  </List>
);

export default MovieList;
