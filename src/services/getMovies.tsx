import api from './api';

const pathUrl = '/films';

interface MoviesInterface {
  data: string; // ADJUST
}

export const getMovies = (): Promise<MoviesInterface[]> =>
  api.get<MoviesInterface[]>(pathUrl).then(({ data }) => data);
