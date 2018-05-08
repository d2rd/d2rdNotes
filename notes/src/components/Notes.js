import React, { Component } from 'react';
import './App.css';
import logo from './D2rdroid2.png';
import SelectedNote from './SelectedNote';
import { connect } from 'react-redux';
import { deleteNote, updateSingleNote, toggleShowUpdate } from '../actions';
import UpdateNoteForm from './UpdateNoteForm';

class Notes extends Component {
  handleDeleteNote = () => {
    const { id } = this.props.noteSelected;
    this.props.deleteNote(id);
  };

  handleShowNote = note => {
    this.props.updateSingleNote(note);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div className="Note-Container">
        <ul className="Note-List">
          {this.props.notes.map(note => {
            return (
              <li onClick={() => this.handleShowNote(note)} key={note.id}>
                {note.title}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.noteSelected).length > 0 ? (
          <SelectedNote
            handleShowNote={this.handleShowNote}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteNote={this.handleDeleteNote}
            selected={this.props.noteSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateNoteForm note={this.props.noteSelected} />
        ) : null}
        {this.props.deletingNote ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingNote: state.notesReducer.deletingNote,
    error: state.notesReducer.error,
    showUpdate: state.singleNoteReducer.showUpdate,
    noteSelected: state.singleNoteReducer.noteSelected
  };
};

export default connect(mapStateToProps, {
  deleteNote,
  updateSingleNote,
  toggleShowUpdate
})(Notes);



// // MY LAYOUT

// return (
//   <div>
//     {/* <ul>
//       <li><h3>Notes:</h3></li>
//     </ul> */}

//     <div className="View-header">
//       <h1>Your Notes</h1>
//       {/* <h1>Your Notes {this.props.pageHeader}</h1> */}
//     </div>
//     <div>
//       <ul>
//         {/* <li>
//           {this.props.notes.map( notes => {
//                   return <div>{ notes }</div>
//                 })}
//         </li> */}
//         <li className="Note-row">
//           {this.props.notes.map((note, i) => {
//             return (
//               <div key = {i}>
//                 <header className="Note-header">
//                   <h3> {note.title}</h3>
//                 </header>
//                 <p className="Note-item"> {note.body}</p>
//               </div>
//             );
//           })}
//         </li>
//       </ul>
//     </div>
//   </div>
// );