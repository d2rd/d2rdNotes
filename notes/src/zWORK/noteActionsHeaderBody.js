const FETCH_NOTES = 'FETCH_NOTES';

const d2rdNotes = [
  {
    title: '',
    body: '',
    id: null
  }
]
const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: d2rdNotes
  }
}

export { fetchNotes }