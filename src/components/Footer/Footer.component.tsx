import React from 'react';

import { ContainerFooter, Text } from './Footer.styles';

const Footer: React.FC = () => (
  <ContainerFooter data-testid="footer-component">
    All content belongs to <Text href="https://swapi.dev/">SWAPI</Text> - Data
    provided by <b>SWAPI</b>. © 2023 -{' '}
    <Text href="https://github.com/brunormferreira">by Bruno Ramires.</Text>
  </ContainerFooter>
);

export default Footer;
