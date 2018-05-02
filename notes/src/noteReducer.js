// 2a create reducer(s)

const noteReducer = (notes =[], action) => {
  switch( action.type ){
    case 'FETCH_NOTES':
      // return [...notes, ...action.payload]
      return notes.concat(action.payload);
      default: 
        return notes
  }
}

export { noteReducer };