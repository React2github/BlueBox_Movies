import React, { Component } from 'react';
import "../style/main.css"

class Main extends Component {
    state = {  }
    render() { 
        return (
          <div className="jumbotron">
            <div className="test"> 
            <h1 className="display-4">New Releases</h1>
            <p className="lead">
              The Best Movies and Shows!
            </p>
            <hr className="my-4" />
            <p>
              Search for a Movie and Get Started
            </p>
          </div>
          </div>
        );
    }
}
 
export default Main;