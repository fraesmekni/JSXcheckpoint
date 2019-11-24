import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{border:'solid 1px black' ,maxWidth:'100vw' }} > 
      <h1 className="titel red" > my titel</h1>
      <br/>
      <img src='https://image.flaticon.com/icons/png/512/1183/1183672.png' alt='' />
      <br/>
      <img src='https://image.flaticon.com/icons/png/512/1183/1183672.png' alt='' />
      
      </div>
    </div>
     

  ); 
 
}

export default App;
