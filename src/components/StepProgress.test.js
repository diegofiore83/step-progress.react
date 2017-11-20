import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import data from '../config/steps.json';
import StepProgress from './StepProgress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StepProgress />, div);
});

test('should not set the current step on step forward click', () => {
    const wrapper = shallow(<StepProgress />);
    wrapper.setState({ steps: data.steps, current: 0 });

    wrapper.find('#uiStep2').simulate('click');

    expect(wrapper.state('current')).toEqual(0);
});

test('should set the current step on step backward click', () => {
    const wrapper = shallow(<StepProgress />);
    wrapper.setState({ steps: data.steps, current: 4 });

    wrapper.find('#uiStep2').simulate('click');

    expect(wrapper.state('current')).toEqual(2);
});