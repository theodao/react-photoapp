import React from 'react';
import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Pagination from '../';

describe('Testing Pagination component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Pagination />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Trigger use effect', () => {
    const mockFetchingData = jest.fn();

    const tree = renderer.create(
      <Pagination onChangePageNumber={mockFetchingData} />,
    );
    tree.update();

    // expect(mockFetchingData).toHaveBeenCalled();
  });

  it('Should change page when click previous', () => {
    const onPageNumChange = jest.fn();

    const wrapper = shallow(
      <Pagination onChangePageNumber={onPageNumChange} currentPage={2} />,
    );
    console.log(wrapper.debug());
    wrapper.find('Prev').props().onClick();

    expect(onPageNumChange).toHaveBeenCalled();
  });

  it('Should change page when click next', () => {
    const onPageNumChange = jest.fn();

    const wrapper = shallow(
      <Pagination onChangePageNumber={onPageNumChange} currentPage={2} />,
    );
    console.log(wrapper.debug());
    wrapper.find('Next').props().onClick();

    expect(onPageNumChange).toHaveBeenCalled();
  });
});
