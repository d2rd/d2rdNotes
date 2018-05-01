const FETCH_NOTES = 'FETCH_NOTES';

const notes = ["note1", "note2", "note3"];

const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: notes
  }
}

export { fetchNotes }