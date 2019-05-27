import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';


enzyme.configure({ adapter: new Adapter() });


let component;
describe('tests for App', () => {
  it('renders container', () => {
    component = shallow(<App />);

    expect(component.find('.container').length).toBe(1);
  });
});
