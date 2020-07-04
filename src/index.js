import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import Popup from "./componets/Popup"

import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import Results from './componets/results';


const initialState = {
  s: "",
  results: [],
  selected: {},
  Shopping: [],
  Wishlist: [],
  Rentals: [],
  Rating: [],
  Bad: []
};


function app (state = initialState,action) { 
     switch (action.type) {
    case 'RENT':
      return {
        ...state,
        Rentals: state.Rentals.concat('Added movie to rental list')
      }
      case 'LIST':
        return {
          ...state,
          Wishlist: state.Wishlist.concat('Saved Movie to Wishlist')
        }
      case 'SHOP':
        return {
          ...state,
          Shopping: state.Shopping.concat('Added Movie to Cart')
        }
      case 'RATE':
        return {
         ...state,
         Rating: state.Rating.concat('Added movie to top 5 list')
        }
      case 'BAD':
        return {
        ...state,
        Bad: state.Bad.concat('Added movie to bad list')
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

