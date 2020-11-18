import React from 'react';

import { render } from '@testing-library/react';

import App from '../pages/App';

describe('App', () => {
  it('renders App', () => {
    const { container } = render((
      <App />
    ));
    expect(container).toHaveTextContent('Hello');
  });
});
