import React from 'react';

const UpdateNoteForm = props => {
  return (
    <form>
      <input placeholder={props.note.title} />
      <input placeholder={props.note.summary} />
      <input placeholder={props.note.body} />
      <input placeholder={props.note.priority} />
    </form>
  );
};

export default UpdateNoteForm;
