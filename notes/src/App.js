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
          <div><button class="btn-NavButton">View Your Notes</button></div>
          <div><button class="btn-NavButton">+ Create New Note</button></div>
        </div>
        {/* Notes lists and all other view elements go below here */}
        <div className="Notes-panel">
          <div className="View-header">
                  <h1>Your Notes</h1>
                  {/* <h1>Your Notes {this.props.pageHeader}</h1> */}
          </div>
          <div>
              <ul>
                <li className="Note-row">
                  <div className="NoteItem">
                  <div className="Note-header">
                      <h3>Note #0 Title {this.props.title}</h3>
                  </div>
                  <div className="Note-body">This is the note body.</div>
                  </div>
                  
                </li>
              </ul>
            </div>
        </div>

        
      </div>
    );
  }
}

export default App;
