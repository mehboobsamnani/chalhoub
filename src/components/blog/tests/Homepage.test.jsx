import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { HomePage } from '../HomePage';

enzyme.configure({ adapter: new Adapter() });

describe('Homepage', () => {
  const component = shallow(<HomePage />);

  it('render container', () => {
    expect(component.find('.articles').length).toBe(1);
  });

  it('executed api call', () => {
    expect(component.instance().doApiCall()).toBe(true);
  });
});
