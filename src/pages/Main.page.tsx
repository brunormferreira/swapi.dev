import React from 'react';

import Brand from '../components/Brand/Brand.component';
import AppName from '../components/Title/Title.component';
import MovieList from '../components/MovieList/MovieList.component';
import Footer from '../components/Footer/Footer.component';

import { ContainerApp } from './Main.styles';

const Main: React.FC = (): JSX.Element => (
  <ContainerApp>
    <Brand />
    <AppName />
    <MovieList />
    <Footer />
  </ContainerApp>
);

export default Main;
