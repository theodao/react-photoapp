import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import InputComponent from '../';

describe('Testing input component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<InputComponent />);
    expect(asFragment()).toMatchSnapshot();
  });
});
