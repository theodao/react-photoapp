import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import CardImage from '../';

describe('Testing card image component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<CardImage />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Should trigger on click', () => {
    const onClickButton = jest.fn();

    const wrapper = shallow(<CardImage onClick={onClickButton} />);

    wrapper.find('.card').props().onClick();

    expect(onClickButton).toHaveBeenCalled();
  });
});
