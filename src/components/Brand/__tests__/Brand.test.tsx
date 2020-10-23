import React from 'react';

import { render } from '@testing-library/react';
import Brand from '../Brand.component';

describe('<Brand>', () => {
  describe('render', () => {
    it('should render component', () => {
      const { getByTestId } = render(<Brand />);

      expect(getByTestId('brand-component')).toBeDefined();
    });
  });
});
