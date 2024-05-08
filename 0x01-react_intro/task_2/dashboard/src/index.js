import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import './Notifications.css';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootNotification = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotification.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
