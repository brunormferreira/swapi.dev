/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import { getMovies } from '../../services/getMovies';

import greenSaber from '../../assets/images/green-saber.svg';
import redSaber from '../../assets/images/red-saber.svg';

import Modal from '../Modal/Modal.component';
import Loader from '../Loader/Loader.component';

import { useModal } from '../../context/modal';
import ReducerEnum from '../../context/modal/enum';

import {
  MovieListWrapper,
  Title,
  MoviesContainer,
  GreenSaber,
  RedSaber,
  MoviesInfo,
  MoreInfoButton,
} from './Movie.styles';

const MovieList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<any>([]);
  const [index, setIndex] = useState(0);

  const { state, dispatch } = useModal();

  const showModal = (idx: any): void => {
    setIndex(idx);
    dispatch({ type: ReducerEnum.SET_VISIBLE });
  };

  useEffect(() => {
    getMovies().then(({ results }) => {
      setIsLoading(true);
      const dataSorted = results.sort(
        (a: any, b: any) => a.episode_id - b.episode_id,
      );
      setMovies(dataSorted);
    });
    setIsLoading(false);
  }, [setMovies]);

  return (
    <main>
      {!isLoading && <Loader />}
      {movies.map((movie: any, idx: any) => (
        <div key={idx}>
          <MovieListWrapper>
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
              <MoreInfoButton type="button" onClick={() => showModal(idx)}>
                READ MORE
              </MoreInfoButton>
              {state.isVisible && <Modal movie={movies[index]} />}
            </div>
          </MovieListWrapper>
        </div>
      ))}
    </main>
  );
};

export default MovieList;
