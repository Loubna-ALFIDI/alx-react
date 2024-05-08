import { getFullYear, getFooterCopy } from "./utils";
import logo from "./holberton-logo.jpg";
import "./App.css";

function App() {
  const currentYear = getFullYear();
  const isIndex = true; // Assuming this is the index page

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>&copy; {currentYear} {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;
