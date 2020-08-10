import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AddCategory, mapDispatchToProps, mapStateToProps } from '../';
import { shallow } from 'enzyme';

describe('Testing Add Category component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const store = createStore(() => ({
      auth: {
        isLoggedIn: false,
      },
      app: {
        isLoading: false,
      },
    }));
    const { asFragment } = render(
      <Provider store={store}>
        <AddCategory
          auth={{
            isLoggedIn: false,
          }}
          app={{
            isLoading: false,
          }}
        />
        , ,
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('testing mapStateToProps', () => {
    const state = {
      auth: {
        isLoggedIn: false,
      },
      app: {
        isLoading: false,
      },
    };

    const mappedState = mapStateToProps(state);

    expect(mappedState).toEqual({
      auth: {
        isLoggedIn: false,
      },
      app: {
        isLoading: false,
      },
    });
  });

  it('testing mapDispatchToProps', () => {
    const mockDispatchFunction = jest.fn();

    const mappedDistpachFunction = mapDispatchToProps(mockDispatchFunction);

    mappedDistpachFunction.dispatchAddCategory();

    expect(mockDispatchFunction).toHaveBeenCalled();
  });

  it('Trigger on submit', () => {
    const mockedDispatchAddCategory = jest.fn();

    const wrapper = shallow(
      <AddCategory
        dispatchAddCategory={mockedDispatchAddCategory}
        auth={{
          isLoggedIn: true,
        }}
        app={{
          isLoading: false,
        }}
      />,
    );
    wrapper.find('form').props().onSubmit();

    expect(mockedDispatchAddCategory).toHaveBeenCalled();
  });
});
