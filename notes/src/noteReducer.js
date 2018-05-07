import {logger} from 'redux-logger';
import {thunk} from 'redux-thunk';
import { applyMiddleware } from 'redux';
import {createStore} from 'redux';
// import { notesReducer } from './noteReducer';

import { FETCH_NOTES_START, FETCH_NOTES, FETCHING, ERROR, SUCCESS } from './components/noteActions';

const defaultState = {fetching: false, error: '', notes: []}

// 2a create reducer(s) with case statements on how to handle each type of action:
const noteReducer = (state =[], action) => { //creates blank array for state, 2nd argument is action.
  switch( action.type ){
    case "FETCH_NOTES_START": {
      return {...state, fetching: true, error: false}
      // break;
    }
    case 'FETCH_NOTES': {
      // return [...state, ...action.payload]
      return state.concat(action.payload);
    }  
    case 'SUCCESS': // SUCCESS
      return state.concat(action.payload);
      
    case 'ERROR':  {  // ERROR
      return {...state, fetching: false, error: action.payload}
      // break;
    }  
    default: 
      return state
  }
}

const middleware = applyMiddleware(thunk, logger())
// const store = createStore(noteReducer, middleware)
export { noteReducer };

// 3 states
  // Fetching
  //Success
  //Error