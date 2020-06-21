import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    const path = 'src/App.tsx';
    const message = ' and save to reload OR NOT.';
    const desc = 'Learn React';
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>{path}</code>
            {message}
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            {desc}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
