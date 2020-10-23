import React from 'react';

import { render } from '@testing-library/react';
import MovieList from '../MovieList.component';

describe('<Movie>', () => {
  describe('render', () => {
    it('should render component', () => {
      const { getByTestId } = render(<MovieList />);

      expect(getByTestId('movie-list-component')).toBeDefined();
    });
  });
});
