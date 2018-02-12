import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import {  applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';


const store = createStore(reducer,  applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
