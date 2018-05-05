import { FETCHING, ERROR, SUCCESS } from './components/noteActions';

const defaultState = {fetching: false, error: '', notes: []}

// 2a create reducer(s)
const noteReducer = (state =[], action) => { //creates blank array for state, 2nd argument is action.
  switch( action.type ){
    case 'FETCH_NOTES':
      // return [...state, ...action.payload]
      return state.concat(action.payload);
      
    case 'SUCCESS': // SUCCESS
      return state.concat(action.payload);
      
    case 'ERROR':  // ERROR
      return state.error (action.payload);
      
    default: 
      return state
  }
}

export { noteReducer };

// 3 states
  // Fetching
  //Success
  //Error