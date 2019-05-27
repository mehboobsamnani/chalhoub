import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CategoryNews } from '../CategoryNews';
import testData from '../../../data/testData';

enzyme.configure({ adapter: new Adapter() });

describe('CategoryNews', () => {
  const match = { params: { id: 'business' }  };
  const component = shallow(<CategoryNews match={match} articles={testData.articles} />);

  it('render container', () => {
    expect(component.find('.articles').length).toBe(1);
  });

  it('executed api call', () => {
    expect(component.instance().doApiCall()).toBe(true);
  });
});
