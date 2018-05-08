import React from 'react';

export default function SelectedNote(props) {
  return (
    <div>
      <h4>{props.selected.title}</h4>
      <span onClick={() => props.handleShowNote({})}> X </span>
      <div>{props.selected.body}</div>
      <div>{props.selected.priority}</div>
      <button onClick={() => props.handleDeleteNote()}>{`Delete ${
        props.selected.title
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.title
      }`}</button>
    </div>
  );
}
