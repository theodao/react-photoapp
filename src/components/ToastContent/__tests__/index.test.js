import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import ToastContent from '../';

describe('Testing toast content component', () => {
  afterEach(cleanup);

  it('Should match snapshot', () => {
    const { asFragment } = render(<ToastContent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('If content was an array it should be rendered', () => {
    const wrapper = shallow(<ToastContent content={['a']} />);

    console.log(wrapper.debug());
  });
});
