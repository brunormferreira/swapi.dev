import React from 'react';

import { render } from '@testing-library/react';
import Loader from '../Loader.component';

describe('<Loader>', () => {
  describe('render', () => {
    it('should render component', () => {
      const { getByTestId } = render(<Loader />);

      expect(getByTestId('loader-component')).toBeDefined();
    });
  });
});
