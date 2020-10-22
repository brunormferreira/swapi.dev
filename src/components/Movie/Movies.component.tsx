/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';

import greenSaber from '../../assets/images/green-saber.svg';
import redSaber from '../../assets/images/red-saber.svg';

import { useModal } from '../../context/modal';
import ReducerEnum from '../../context/modal/enum';

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

const Movies = ({ movie }: Props) => {
  const { dispatch } = useModal();

  const showModal = () => dispatch({ type: ReducerEnum.SET_VISIBLE });

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
          {/* <li>{movie.opening_crawl}</li> */}
        </MoviesInfo>
        <RedSaber src={redSaber} alt="Red saber" />
      </MoviesContainer>
      <div>
        <MoreInfoButton type="button" onClick={showModal}>
          READ MORE
        </MoreInfoButton>
      </div>
    </MovieList>
  );
};

export default Movies;
