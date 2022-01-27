import './index.css';

import { combineReducers, createStore } from 'redux';
import { searchChampions, toggleDropdown } from './reducers'

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

const rootReducer = combineReducers({ searchChampions, toggleDropdown })
const store = createStore(rootReducer)

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

