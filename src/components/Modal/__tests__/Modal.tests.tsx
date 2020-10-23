import React from 'react';

import { render } from '@testing-library/react';
import Modal from '../Modal.component';

const MOCK = {
  director: 'string',
  episode_id: 1,
  opening_crawl: 'Mock crawl',
  producer: 'Mock producer',
  release_date: 'string',
  title: 'Mock title',
};

describe('<Modal>', () => {
  describe('render', () => {
    it('should render component', () => {
      const INITIAL_VALUES = { ...MOCK };
      const { getByTestId } = render(<Modal movie={INITIAL_VALUES} />);

      expect(getByTestId('modal-component')).toBeDefined();
    });
  });
});
