import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';

import { Provider } from "react-redux";
import {createStore, applyMiddleware} from 'redux';



const initialState = {
  s: "",
  results: [],
  selected: [],
  Shopping: [],
  Wishlist: [],
  Rentals: [],
  Rating: [],
  Bad: []
};


function reduxApp (state = initialState,action) { 
     switch (action.type) {
    case 'RENT':
      return {
        ...state,
        Rentals: state.Rentals + alert('Added movie to rental list')
      }
      case 'LIST':
        return {
          ...state,
          Wishlist: state.Wishlist + alert('Saved Movie to Wishlist')
        }
      case 'SHOP':
        return {
          ...state,
          Shopping: state.Shopping + alert('Added Movie to Cart')
        }
      case 'RATE':
        return {
         ...state,
         Rating: state.Rating + alert('Added movie to top 5 list')
        }
      case 'BAD':
        return {
        ...state,
        Bad: state.Bad + alert('Added movie to bad list')
        }
      default:
        return state 
  }
}



const store = createStore(reduxApp, applyMiddleware(thunk)) 




ReactDOM.render(
 
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

