import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends Component {
     state = { 
       counter: null
      }

      componentDidMount() {
        this.setState ({
          counter:"Log in"
        })
        alert("Remember to sign in") 
        }
      
    render() { 
    
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">BlockBuster</a>
        <span>{this.state.counter}</span>
        <button onClick={() => {this.setState({counter: "Signed"})}}>Login</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#movies">Movies</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        );
    }
}
 
export default Header;