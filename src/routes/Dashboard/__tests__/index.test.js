import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import renderer from 'react-test-renderer';
import { Dashboard } from '../';

describe('Testing dashboard route', () => {
  afterEach(cleanup);

  const store = createStore(() => ({
    auth: {
      isLoggedIn: false,
    },
    app: {
      isLoading: false,
    },
  }));

  it('Should match snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Dashboard
          category={{
            isFetching: false,
            categories: [],
          }}
          auth={{
            isLoggedIn: false,
          }}
        />
        ,
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  // it('Should call api', () => {
  //   const mockFetchingData = jest.fn();

  //   const tree = renderer.create(
  //     <Provider store={store}>
  //       <Dashboard
  //         category={{
  //           isFetching: false,
  //           categories: [],
  //         }}
  //         auth={{
  //           isLoggedIn: false,
  //         }}
  //         fetchCategoryList={mockFetchingData}
  //       />
  //     </Provider>,
  //   );
  //   tree.update();

  //   expect(mockFetchingData).toHaveBeenCalled();
  // });
});
