import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';


import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import Results from './componets/results';


const initialState = {
  s: "",
  results: [],
  selected: {},
  secretSauce: [] 
};

var movies = [' Harry Potter,', " Cat in The Hat"]
var notmovies = ['Not harry', 'not cat in the hat']

function app (state = initialState,action) { 
     switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        results: state.results.concat(movies)
      }
      case 'DECREMENT':
        return {
          ...state,
          secretSauce: state.secretSauce.concat(notmovies)
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

