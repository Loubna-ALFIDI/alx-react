import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles.AppBody)}> 
         <p>Login to access the full dashboard</p>
         <label htmlFor="email">Email:</label>
         <input type="text" id="email" name="email"></input>
         <label htmlFor="password">Password:</label>
         <input type="password" id="password" name="password"></input>
         <button style={{
               background: "transparent",
               borderRadius: '5px',
               margin: "0 0 0 10px",
               border: "1px solid gray"
         }}>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1rem',
    padding: '50px',
  }
})

export default Login
