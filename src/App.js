import React, { useState} from 'react';
import Header from "./componets/header"
import Footer from "./componets/footer"
import Main from "./componets/main"
import Search from "./componets/search"
import Results from "./componets/results"
import axios from "axios"
import Popup from "./componets/Popup"
import Counter from "./componets/redux";
import Testlist from './componets/wishlist';

function App() {
  const [state, setState] = useState({
   s: "",
   results: [],
   selected: {},
   WishList: []
  });
  const apiurl="http://www.omdbapi.com/?apikey=2d91e6e4";

const search = (e) => {
  if(e.key === "Enter") {
  axios(apiurl + "&s=" + state.s).then(({ data }) => {
    let results = data.Search;
    setState(prevState => {
      return {...prevState, results: results}
    })
  })
  }
}

  const handleInput = (e) => {
    let s = e.target.value;
    
    setState(prevState => {
      return {...prevState, s: s}
    });
  }

 const openPopup = id => {
   axios(apiurl + "&i=" + id).then(({ data }) => {
     let result = data;
   
     setState(prevState => {
       return {...prevState, selected: result}
     })
   })
 }

 const closePopup = () => {
   setState(prevState => {
     return { ...prevState, selected: {} }
   });
 }

 function hello () {
   console.log('hello')
 }

 const Wishlist = () => {
  setState(prevState => {
    return { ...prevState, WishList: {hello} }
})
}

  return (
    <div>
    <Header />
    <Main />
    <Search handleInput={handleInput} search={search}/>
    <Results results={state.results} openPopup={openPopup}/>

    {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} 
    closePopup={closePopup} Wishlist={Wishlist}/> : false }
    <Footer />
    </div>
  );
}

export default App;
