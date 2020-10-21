import React from 'react';

import greenSaber from '../../assets/images/green-saber.svg';
import redSaber from '../../assets/images/red-saber.svg';

import {
  MovieList,
  Title,
  MoviesContainer,
  GreenSaber,
  RedSaber,
  MoviesInfo,
  MoreInfoButton,
} from './Movie.styles';

type Props = {
  movie: any;
};

const Movies = ({ movie }: Props): JSX.Element => {
  return (
    <MovieList>
      <Title>
        {movie.title}
        <span> ~ Episode {movie.episode_id}</span>
      </Title>
      <MoviesContainer>
        <GreenSaber src={greenSaber} alt="Green saber" />
        <MoviesInfo>
          <li>
            Released in <span>{movie.release_date}</span>
          </li>
          <li>
            Directed by <span>{movie.director}</span>
          </li>
          <li>
            Produced by <span>{movie.producer}</span>
          </li>
        </MoviesInfo>
        <RedSaber src={redSaber} alt="Red saber" />
      </MoviesContainer>
      <div>
        <MoreInfoButton
          onClick={() => alert(`Hi! This movies is ${movie.episode_id}`)}
        >
          READ MORE
        </MoreInfoButton>
      </div>
    </MovieList>
  );
};

export default Movies;
