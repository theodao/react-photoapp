import React from 'react';
// import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MainLayout, mapDispatchToProps, mapStateToProps } from '../MainLayout';

describe('Testing Mainlayout component', () => {
  // afterEach(cleanup);

  const pushFunction = jest.fn();

  const history = {
    push: pushFunction,
  };

  it('Should match snapshot', () => {
    const tree = renderer
      .create(
        <MainLayout
          match={{ path: '' }}
          auth={{
            isLoggedIn: false,
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should push to dashboard when clicking dashboard', () => {
    const wrapper = shallow(
      <MainLayout
        match={{ path: '' }}
        history={history}
        auth={{
          isLoggedIn: false,
        }}
      />,
    );

    wrapper
      .findWhere(
        (c) =>
          c.name() === 'TopMenu.Item' && c.prop('eventKey') === '/dashboard',
      )
      .props()
      .onClick();
    expect(pushFunction).toHaveBeenCalled();
  });

  it('Should push to add category when clicking add category', () => {
    const wrapper = shallow(
      <MainLayout
        match={{ path: '' }}
        auth={{
          isLoggedIn: false,
        }}
        history={history}
      />,
    );

    wrapper
      .findWhere(
        (c) =>
          c.name() === 'TopMenu.Item' && c.prop('eventKey') === '/add-category',
      )
      .props()
      .onClick();
    expect(pushFunction).toHaveBeenCalled();
  });

  it('Should dispatch logout when user is logged in', () => {
    const dispatchLogout = jest.fn();

    const wrapper = shallow(
      <MainLayout
        match={{ path: '' }}
        auth={{
          isLoggedIn: true,
        }}
        history={history}
        dispatchLogout={dispatchLogout}
      />,
    );

    wrapper
      .findWhere((c) => c.name() === '_default' && c.prop('label') === 'Logout')
      .props()
      .onClick();

    expect(dispatchLogout).toHaveBeenCalled();
  });

  it('testing sign up function', () => {
    const pushToSignUpPageFunc = jest.fn();

    const wrapper = shallow(
      <MainLayout
        match={{ path: '' }}
        auth={{
          isLoggedIn: false,
        }}
        history={{
          push: pushToSignUpPageFunc,
        }}
      />,
    );

    wrapper
      .findWhere(
        (c) => c.name() === '_default' && c.prop('label') === 'Sign up',
      )
      .props()
      .onClick();

    expect(pushToSignUpPageFunc).toHaveBeenCalled();
  });

  it('testing login function', () => {
    const pushToLogInPageFunc = jest.fn();

    const wrapper = shallow(
      <MainLayout
        match={{ path: '' }}
        auth={{
          isLoggedIn: false,
        }}
        history={{
          push: pushToLogInPageFunc,
        }}
      />,
    );

    wrapper
      .findWhere((c) => c.name() === '_default' && c.prop('label') === 'Login')
      .props()
      .onClick();

    expect(pushToLogInPageFunc).toHaveBeenCalled();
  });

  it('testing mapStateToProps', () => {
    const state = {
      auth: {
        isLoggedIn: false,
      },
    };

    const mappedState = mapStateToProps(state);

    expect(mappedState).toEqual({
      auth: {
        isLoggedIn: false,
      },
    });
  });

  it('testing mapDispatchToProps', () => {
    const mockDispatchFunction = jest.fn();

    const mappedDistpachFunction = mapDispatchToProps(mockDispatchFunction);

    mappedDistpachFunction.dispatchLogout();

    expect(mockDispatchFunction).toHaveBeenCalled();
  });
});
