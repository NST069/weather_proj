import React from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

function App() {
  const endpoint = "http://localhost:5000";

  axios.get(`${endpoint}/getWeather`,{params:{city: "London", state: "uk"}})
    .then((res)=>console.log(res.data));
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
    </div>
  );
}

export default App;
