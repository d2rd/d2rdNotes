import React from 'react';
import ReactDOM from 'react-dom';
import logger  from 'redux-logger';
import './index.css';
import App from './App';
// 2b) import reducer (2a is create reducer module)
import { noteReducer } from './noteReducer';

// 1a) Import createStore and applyMiddleware components 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//3a import Provider
import { Provider } from 'react-redux';  // allows store to be state for entire React app
import Notes from './components/Notes';

// import defaultState from './components' // for 1d

// 1e) set initial state  TEST
  // const initialState = {
  // defaultState
  // };

  // // invoke logger
  // const logger = (store) => (next) => (action) => {
  //   console.log("action fired", action);
  // }

  const error = (store) => (next) => (action) => {
    try {
      next(action);
    } catch(e) {
      console.log("AHHHH!!!", e);
    }
  }
  //1c) invoke middleware
const middleware = applyMiddleware(logger, error);

/* 
// APP RUNS BUT STORE NOT FOUND
// 1d) create store
const store = createStore(noteReducer, middleware);  //2c add reducer as argument for createStore
*/

/*
//STORE is found but crashes with error: 'TypeError-this.props.notes.map is not a function'
const store = createStore(noteReducer, middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  //2c add reducer as argument for createStore
  */
 // adds store then  crashes: When this statement is used Redux tools sees the store but does not recognize middleware as a function
 const store = createStore(noteReducer, composeWithDevTools (applyMiddleware(...middleware),
));  

/*
*/

store.subscribe(() => {
  console.log("store changed", store.getState(Notes))
})

//3b wrap 'App' in Provider and specify store
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

