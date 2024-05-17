import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App tests', () => {
  it('should render Notifications component', () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it('should render Header component', () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Login component when not logged in', () => {
    const component = shallow(<App isLoggedIn={false} />);
    expect(component.containsMatchingElement(<Login />)).toEqual(true);
    expect(component.containsMatchingElement(<CourseList />)).toEqual(false);
  });

  it('renders CourseList component if logged in', () => {
    const component = shallow(<App isLoggedIn={true} />);
    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.containsMatchingElement(<Login />)).toEqual(false);
  });

  it('should render Footer component', () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Footer />)).toEqual(true);
  });
});
