import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Signup, mapStateToProps, mapDispatchToProps } from '../';

describe('Testing sign up route', () => {
  afterEach(cleanup);

  const pushFunction = jest.fn();

  const history = {
    push: pushFunction,
  };

  beforeAll(() =>
    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect),
  );
  afterAll(() => React.useEffect.mockRestore());

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Signup
        auth={{
          isLoggedIn: false,
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should navigate back to dashboard when user is not logged in', () => {
    const tree = renderer.create(
      <Signup
        auth={{
          isLoggedIn: true,
        }}
        history={history}
      />,
    );
    tree.update();
    expect(pushFunction).toHaveBeenCalled();
  });

  it('Testing mapStateToProps', () => {
    const state = {
      auth: {
        isLoggedIn: false,
      },
    };

    const transformedState = mapStateToProps(state);

    expect(transformedState.auth.isLoggedIn).toBe(false);
  });

  it('Testing mapDistpachToProps', () => {
    const mockedDispatchFunction = jest.fn();

    const dispatchFunctions = mapDispatchToProps(mockedDispatchFunction);

    dispatchFunctions.dispatchSignup();

    expect(mockedDispatchFunction).toHaveBeenCalled();
  });
});
