import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const wrapper = mount(<App />);
  expect(wrapper).toContainMatchingElements(1, 'div[data-test="app"]');
});
