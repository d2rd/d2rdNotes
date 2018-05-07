import React from 'react';
// import ReactDOM from 'react-dom';

const CreateNoteView = (props => {
  // constructor(props){
  //   super(props)
  // }{
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
});

export default CreateNoteView;