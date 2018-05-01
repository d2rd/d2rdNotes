import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 2b) import reducer (2a is create reducer module)
import { noteReducer } from './noteReducer';

// 1a) create store 
import { createStore } from 'redux';

//3a import Provider
import { Provider } from 'react-redux';  // allows store to be state for entire React app

// 1b) create store
const store = createStore(noteReducer);  //2c add reducer as argument for createStore


//3b wrap 'App' in Provider and specify store
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

