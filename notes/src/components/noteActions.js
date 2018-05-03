const FETCH_NOTES = 'FETCH_NOTES';

// const notes = ["note1", "note2", "note3"];
let notes = {
  title: 'Note 0',
  body: 'This the text for this note',
  key: null
}
const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: notes
  }
}

export { fetchNotes }