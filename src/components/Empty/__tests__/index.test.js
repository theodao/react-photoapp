import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Empty from '../';

describe('Testing empty component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Empty />);
    expect(asFragment()).toMatchSnapshot();
  });
});
