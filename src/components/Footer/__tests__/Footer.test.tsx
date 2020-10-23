import React from 'react';

import { render } from '@testing-library/react';
import Footer from '../Footer.component';

describe('<Footer>', () => {
  describe('render', () => {
    it('should render component', () => {
      const { getByTestId } = render(<Footer />);

      expect(getByTestId('footer-component')).toBeDefined();
    });
  });
});
