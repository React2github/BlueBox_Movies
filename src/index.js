import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import axios from "axios";

import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';

const initialState = {
counter: 0
};


const app = (state = initialState,action) => { 
     switch (action.type) {
    case 'INCREMENT':
      return { 
        counter: state.counter + 1  
      }
      case 'DECREMENT':
        return {
          counter: state.counter - 1 
        }
      default:
        return state 
  }
}



const store = createStore(app, applyMiddleware(thunk)) 




ReactDOM.render(
 
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

