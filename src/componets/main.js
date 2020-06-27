import React, { Component } from 'react';
import "../style/main.css"

class Main extends Component {
    state = {  }
    render() { 
        return (
          <div class="jumbotron">
            <div className="test"> 
            <h1 class="display-4">New Releases</h1>
            <p class="lead">
              The Best Movies and Shows!
            </p>
            <hr class="my-4" />
            <p>
              Sign up for an account and explore.
            </p>
            <p class="lead">
              <a class="btn btn-primary btn-lg" href="#" role="button">
                Sign Up
              </a>
            </p>
          </div>
          </div>
        );
    }
}
 
export default Main;