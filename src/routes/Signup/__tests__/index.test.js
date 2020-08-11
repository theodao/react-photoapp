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
      <Signup isLoggedIn={false} isLoading={false} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should navigate back to dashboard when user is not logged in', () => {
    const tree = renderer.create(
      <Signup isLoggedIn={true} isLoading={false} history={history} />,
    );
    tree.update();
    expect(pushFunction).toHaveBeenCalled();
  });

  it('Should navigate to login page', () => {
    const pushToLogInPageFunc = jest.fn();

    const wrapper = shallow(
      <Signup
        auth={{
          isLoggedIn: false,
        }}
        app={{
          isLoading: false,
        }}
        history={{
          push: pushToLogInPageFunc,
        }}
      />,
    );

    wrapper
      .findWhere(
        (c) => c.name() === 'styled.div' && c.text() === 'Log In instead ?',
      )
      .props()
      .onClick();

    expect(pushToLogInPageFunc).toHaveBeenCalled();
  });

  it('Testing mapDistpachToProps', () => {
    const mockedDispatchFunction = jest.fn();

    const dispatchFunctions = mapDispatchToProps(mockedDispatchFunction);

    dispatchFunctions.dispatchSignup();

    expect(mockedDispatchFunction).toHaveBeenCalled();
  });
});
