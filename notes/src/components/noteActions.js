
//export the constants we plan on using for each action:
    export const FETCH_NOTES_START = 'FETCH_NOTES_START';
    export const FETCH_NOTES = 'FETCH_NOTES';
    export const FETCHING = 'FETCHING';
    export const SUCCESS = 'SUCCESS'; 
    export const ERROR = 'ERROR';

//refactor to pull from server
let note1 = {
  title: 'Note 1',
  body: 'This the text for note1'
}
let note2 = {
  title: 'Note 2',
  body: 'This the text for note2'
}
let note3 = {
  title: 'Note 3',
  body: 'This the text for note3'
}
let note4 = {
  title: 'Note 4',
  body: 'This the text for note4'
}
let note5 = {
  title: 'Note 5',
  body: 'This the text for note5'
}
const notes = [note1, note2, note3, note4, note5];

//action creator is 9-15
const fetchNotesStart = () => {
  return {  //action object
    type: FETCH_NOTES_START,
    text: "Fetching Notes..."
  }
}
const fetchNotes = () => {
  return {  //action object
    type: FETCH_NOTES,
    payload: notes
  }
}

const fetching = () => {
  return {  //action object
    type: FETCHING,
    payload: "Fetching Notes"
  }
}

const success = () => {
  return {  //action object
    type: SUCCESS,
    payload: notes
  }
}

const error = () => {
  return {  //action object
    type: ERROR,
    payload: "Error fetching notes"
  }
}


export { fetchNotesStart, fetchNotes, fetching, success, error}