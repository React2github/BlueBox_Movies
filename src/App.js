import React, { useState} from 'react';
import Header from "./componets/header"
import Footer from "./componets/footer"
import Main from "./componets/main"
import Search from "./componets/search"
import Results from "./componets/results"
import axios from "axios"

function App() {
  const [state, setState] = useState({
   s: "",
   results: [],
   selected: {} 
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

  return (
    <div>
    <Header />
    <Main />
    <Search handleInput={handleInput} search={search}/>
    <Results results={state.results} />
    <Footer />
    </div>
  );
}

export default App;
