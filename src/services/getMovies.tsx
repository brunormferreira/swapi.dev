import api from './api';

const pathUrl = '/films';

export const getMovies = (): Promise<any> =>
  api.get<any[]>(pathUrl).then(({ data }) => data);
