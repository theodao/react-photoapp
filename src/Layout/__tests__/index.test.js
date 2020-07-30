import React from 'react';
// import { cleanup, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MainLayout } from '../MainLayout';

describe('Testing Mainlayout component', () => {
  // afterEach(cleanup);

  const pushFunction = jest.fn();

  const history = {
    push: pushFunction,
  };

  it('Should match snapshot', () => {
    const pushFunction = jest.fn();

    const history = {
      push: pushFunction,
    };

    const tree = renderer.create(<MainLayout match={{ path: '' }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should push to dashboard when clicking dashboard', () => {
    const wrapper = shallow(
      <MainLayout match={{ path: '' }} history={history} />,
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
      <MainLayout match={{ path: '' }} history={history} />,
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

  it('Should push to add item when clicking to add item', () => {
    const wrapper = shallow(
      <MainLayout match={{ path: '' }} history={history} />,
    );

    wrapper
      .findWhere(
        (c) =>
          c.name() === 'TopMenu.Item' && c.prop('eventKey') === '/add-item',
      )
      .props()
      .onClick();
    expect(pushFunction).toHaveBeenCalled();
  });
});
