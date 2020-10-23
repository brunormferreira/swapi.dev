import React from 'react';

import { render } from '@testing-library/react';
import Title from '../Title.component';

describe('<Title>', () => {
  describe('render', () => {
    it('should render component', () => {
      const { getByTestId } = render(<Title />);

      expect(getByTestId('title-component')).toBeDefined();
    });
  });
});
