import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spacing from '../Spacing';

describe('Spacing style testing', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Spacing />);
    expect(asFragment()).toMatchSnapshot();
  });
});
