import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import News from '../News';
import testData from '../../../data/testData';

enzyme.configure({ adapter: new Adapter() });

describe('News', () => {
  it('renders article', () => {
    const componentBody = (<News article={testData.article} />);
    const component = shallow(componentBody);
    expect(component.find('.article').length).toBe(1);
  });
});
