import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" className={css(styles.input)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" className={css(styles.input)} />
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: '20px',
  },
  input: {
    margin: '10px 0',
    padding: '5px',
  },
  button: {
    background: 'transparent',
    borderRadius: '5px',
    margin: '0 0 0 10px',
    border: '1px solid gray',
    padding: '5px 10px',
  },
});

export default Login;
