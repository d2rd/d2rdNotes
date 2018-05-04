// 2a create reducer(s)

const noteReducer = (state =[], action) => { //creates blank array for state, 2nd argument is action.
  switch( action.type ){
    case 'FETCH_NOTES':
      // return [...state, ...action.payload]
      return state.concat(action.payload);
      default: 
        return state
  }
}

export { noteReducer };