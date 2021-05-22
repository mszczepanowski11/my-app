import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWrapper from './App'
import { Provider } from 'react-redux'
import store from './tools/store'



ReactDOM.render(
  <Provider store={store}>
    <AppWrapper/>
  </Provider>,
  document.getElementById('root')
);

