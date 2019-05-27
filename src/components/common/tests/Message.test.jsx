import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from '../Message';

enzyme.configure({ adapter: new Adapter() });

describe('Ticker', () => {
  it('renders error message', () => {
    const componentBody = (<Message message="" />);
    const component = shallow(componentBody);
    expect(component.find('.err-text').length).toBe(1);
  });
});
