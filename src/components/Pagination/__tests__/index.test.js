import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Pagination from '../';

describe('Testing Pagination component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<Pagination />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should change page when click previous', () => {
    const onPageNumChange = jest.fn();

    const wrapper = shallow(
      <Pagination onChangePageNumber={onPageNumChange} currentPage={2} />,
    );

    wrapper.find('Prev').props().onClick();

    expect(onPageNumChange).toHaveBeenCalled();
  });
});
