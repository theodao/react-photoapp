import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { mapDispatchToProps } from '../';
import { Login } from '../';

describe('Testing login route', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Login isLoggedIn={false} isLoading={false} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Testing mapDispatchToProps', () => {
    const mockDispatchFunction = jest.fn();

    const mappedDistpachFunction = mapDispatchToProps(mockDispatchFunction);

    mappedDistpachFunction.dispatchLogin();
    expect(mockDispatchFunction).toHaveBeenCalled();
  });
});
