import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import SearchBar from './components/SearchBar';

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
          Hello World
        </a>
      </header>

      <div className="App-content">
        <Toggle name="/hello" url="/hello"/>
        <SearchBar name="张三"/>
      </div>
    </div>
  );
}

export default App;
