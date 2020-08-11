import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  ItemList,
  GalleryImage,
  GalleryModal,
  EditItemModal,
  mapStateToProps,
  mapDispatchToProps,
} from '../';
import { shallow } from 'enzyme';

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
          userInformation={{}}
          isFetching={false}
          items={[]}
        />
        , ,
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Gallery image should match snapshot', () => {
    const { asFragment } = render(<GalleryImage />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Gallery modal should return null', () => {
    const wrapper = shallow(<GalleryModal isOpen={false} />);

    expect(wrapper.type()).toEqual(null);
  });

  it('Edit image modal should return null', () => {
    const wrapper = shallow(<EditItemModal isOpen={false} />);

    expect(wrapper.type()).toEqual(null);
  });

  it('Gallery modal should match snapshot', () => {
    const { asFragment } = render(
      <GalleryModal
        isOpen={true}
        onClick={jest.fn()}
        isLoading={false}
        fetchItems={jest.fn()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('Edit item modal should match snapshot', () => {
    const { asFragment } = render(
      <EditItemModal
        isOpen={true}
        onClick={jest.fn()}
        isLoading={false}
        fetchItemDetail={jest.fn()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('testing mapDispatchToProps', () => {
    const mockDispatchFunction = jest.fn();

    const mappedDistpachFunction = mapDispatchToProps(mockDispatchFunction);

    mappedDistpachFunction.fetchItems();
    mappedDistpachFunction.fetchItemDetail();
    mappedDistpachFunction.deleteItemDetail();
    mappedDistpachFunction.updateItemdetail();

    expect(mockDispatchFunction).toHaveBeenCalled();
  });
});
