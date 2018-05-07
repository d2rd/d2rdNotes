import React, { Component } from 'react';
import logo from './D2rdroid2.png';
import './App.css';
import { connect } from 'react-redux';
// import Notes from './components/Notes';
import NotesPanel from './components/NotesPanel';
import NavPanel from './components/NavPanel';
import CreateNoteView from './views/CreateNoteView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Proximo Notes</h1>
        </header>
        {/* Navigation controls go here */}
        <div className="PanelContainer">
        <NavPanel />
          {/* Notes lists and all other view elements go below here */}
          {/* Default display is 'Notes' which lists all notes */}
        <NotesPanel />
        </div>
        {/* when button `createNewNote` is clicked display CreateNoteView */}
        <div className="ModuleBorderRed">
          <CreateNoteView />
        </div>

        {/* <div>
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
            </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return {}
})

export default connect(mapStateToProps, {})(App);
