import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


function App() {
      return (
       <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
          </div>
          <div className="App-body"> 
            <p><b>Login to access the full dashboard</b></p>
            <label htmlFor="email"><b>Email: </b></label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="password"><b> Password: </b></label>
            <input type="password" id="password" name="password"></input>
            <button style={{
                  background: "transparent",
                  borderRadius: '5px',
                  margin: "0 0 0 10px",
                  border: "1px solid gray"
            }}>OK</button>
          </div>
          <div className="App-footer">
            <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
          </div>
        </div>  
      )
    }
  
export default App;
