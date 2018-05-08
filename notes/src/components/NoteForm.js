import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote } from '../actions';

class NoteForm extends Component {
  state = {
    title: '',
    body: '',
    // category: '', // future '{business, personal}
    priority: '' // importance 1-5
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddNote = _ => {
    const { name, priority, body } = this.state;
    this.props.createNote({ name, priority, body });
    this.setState({ name: '', priority: '', body: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.name}
          name="title"
          type="text"
          placeholder="Title"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.priority}
          name="priority"
          type="text"
          placeholder="Priority"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.body}
          name="body"
          type="text"
          placeholder="Body"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddNote()} type="button">
          Save New Note
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingNote: state.creatingNote
  };
};

export default connect(mapStateToProps, { createNote })(NoteForm);


/*
// ***** MY LAYOUT ****
  return (
    <div>
      <div className="View-header">
        <h1>Create New Note</h1>
      </div>
      <form>
        <div>
          <input
            className="InputTitle"
            type="text"
            placeholder="Enter note title"
          />
        </div>
        <div>
          <input
            className="InputBody"
            type="text"
            placeholder="Enter note details"
          />
          <button className="btn-NavButton">Save note</button>
        </div>
      </form>
    </div>
  );
*/