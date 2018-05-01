import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

export default class CreateNoteView extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <div className="View-header">
          <h1>Create New Note</h1>
        </div>
        <form>
          <div>
            <input className="InputTitle" type="text" placeholder="Enter note title"></input>
          </div>
          <div>
            <input className="InputBody"  type="text" placeholder="Enter note details"></input>
            <button class="btn-NavButton">Save note</button>
          </div>
         </form>
    </div>
    )
  }
}
