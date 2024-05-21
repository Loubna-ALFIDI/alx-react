import React, { Component } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from '../BodySection/BodySection';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  };
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  componentDidMount() {
    document.addEventListener('keydown', this.keydownEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownEvent);
  }

  keydownEvent = (e) => {
    if (e.ctrlKey && e.key === 'h'){
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  render() {
    const { isLoggedIn } = this.props;
    return (
      <div className="App">
        <Notifications listNotifications={ listNotifications } />
        <Header />
        {isLoggedIn ? (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList listCourses={ listCourses } />
        </BodySectionWithMarginBottom>
        ) : (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login />
        </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </BodySection>
        <Footer />
      </div>
    );
  }
}



export default App;
