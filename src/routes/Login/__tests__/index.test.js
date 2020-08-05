import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Login, mapDispatchToProps, mapStateToProps } from '../';

describe('Testing login route', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Login auth={{ isLoggedIn: false }} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Testing mapState to props', () => {
    const state = {
      auth: {
        isLoggedIn: false,
      },
    };

    const mappedState = mapStateToProps(state);

    expect(mappedState.auth.isLoggedIn).toEqual(false);
  });

  it('Testing mapDispatchToProps', () => {
    const mockDispatchFunction = jest.fn();

    const mappedDistpachFunction = mapDispatchToProps(mockDispatchFunction);

    mappedDistpachFunction.dispatchLogin();
    expect(mockDispatchFunction).toHaveBeenCalled();
  });
});
