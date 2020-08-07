import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ItemList } from '../';

describe('Testing Item list component', () => {
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
        <ItemList
          fetchItems={jest.fn()}
          auth={{
            userInformation: {},
          }}
          category={{
            isFetching: false,
            items: [],
          }}
        />
        , ,
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
