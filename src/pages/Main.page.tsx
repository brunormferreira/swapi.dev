import React from 'react';

import Brand from '../components/Brand/Brand.component';

import { Container } from './Main.styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Brand />
      <p>Hello from main page</p>
    </Container>
  );
};

export default Main;
