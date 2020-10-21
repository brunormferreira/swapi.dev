import React from 'react';

import Brand from '../components/Brand/Brand.component';
import Footer from '../components/Footer/Footer.component';

import { ContainerApp } from './Main.styles';

const Main: React.FC = () => {
  return (
    <ContainerApp>
      <Brand />
      <div>
        <p>Hello from main page</p>
        <p>Hello from main page</p>
        <p>Hello from main page</p>
        <p>Hello from main page</p>
      </div>
      <Footer />
    </ContainerApp>
  );
};

export default Main;
