import React from 'react';

import { Title } from './Title.styles';

const AppName: React.FC = (): JSX.Element => (
  <Title data-testid="title-component">List of films</Title>
);

export default AppName;
