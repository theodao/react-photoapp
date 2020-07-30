import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Button from '../';

describe('Testing button component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Button />);
    expect(asFragment()).toMatchSnapshot();
  });
});
