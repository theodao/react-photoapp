import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AddCategory } from '../';

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
        <AddCategory />, ,
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
