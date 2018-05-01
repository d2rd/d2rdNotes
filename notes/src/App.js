import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Proximo Notes</h1>
        </header>
                {/* Navigation controls go here */}
        <div className="Nav-panel">
        {/* <h2>LAMBDA NOTES</h2> */}

<div><button class="btn-NavButton">View Your Notes</button></div>
<div><button class="btn-NavButton">+ Create New Note</button></div>
</div>
        
      </div>
    );
  }
}

export default App;
