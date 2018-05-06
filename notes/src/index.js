import React from 'react';
import ReactDOM from 'react-dom';
import logger  from 'redux-logger';
import './index.css';
import App from './App';
// 2b) import reducer (2a is create reducer module)
import { noteReducer } from './noteReducer';

// 1a) Import createStore and applyMiddleware components 
import { createStore, applyMiddleware } from 'redux';

//3a import Provider
import { Provider } from 'react-redux';  // allows store to be state for entire React app

import defaultState from './components' // for 1d

// 1e) set initial state  TEST
  const initialState = {
  defaultState
  };

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


// 1d) create store
const store = createStore(noteReducer, middleware);  //2c add reducer as argument for createStore

store.subscribe(() => {
  console.log("store changed", store.getState())
})

//3b wrap 'App' in Provider and specify store
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

