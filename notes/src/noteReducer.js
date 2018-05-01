// 2a create reducer(s)

const noteReducer = (notes =[], action) => {
  switch( action.payload ){
    case 'FETCH_NOTES':
      // return [...notes, ...action.payload]
      return notes.concat(action.payload)
  }
  return notes
}

export { noteReducer };