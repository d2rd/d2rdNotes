import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 1a) create store 
import { createStore } from 'redux';
// 2b) import reducer (2a is create reducer module)
import { noteReducer } from './noteReducer';

// 1b) create store
const store = createStore(noteReducer);  //2c add reducer as argument for createStore



ReactDOM.render(<App />, document.getElementById('root'));

