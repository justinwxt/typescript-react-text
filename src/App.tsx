import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <Test/>
    </div>
  );
}

export default App;
