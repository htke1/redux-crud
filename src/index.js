import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import {Provider} from 'react-redux'
import {compose, applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducer/index'

const store = createStore(reducers, compose(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


