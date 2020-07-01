import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import {createStore} from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
      default:
        return state 
  }
}

const store = createStore(todos, ['Use Redux']) 

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs'
})


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

