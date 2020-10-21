import React from 'react';

import Brand from '../components/Brand/Brand.component';
import Footer from '../components/Footer/Footer.component';
import Movies from '../components/Movie/Movies.component';
import { ContainerApp } from './Main.styles';

const Main: React.FC = () => {
  const movies = {
    title: 'Teste title',
    episode_id: '2',
    release_date: '140596',
    director: 'ABDF',
    producer: 'Bdadaf',
  };

  return (
    <ContainerApp>
      <Brand />
      <Movies movie={movies} />
      <Movies movie={movies} />
      <Movies movie={movies} />
      <Movies movie={movies} />

      <Footer />
    </ContainerApp>
  );
};

export default Main;
