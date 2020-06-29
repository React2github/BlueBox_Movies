import React, { Component } from "react";

class Footer extends Component {
  // state = {  }
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#movies">
            Movies
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Members
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
