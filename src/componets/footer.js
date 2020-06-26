import React, { Component } from "react";

class Footer extends Component {
  // state = {  }
  render() {
    return (
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#movies">
            Movies
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Members
          </a>
        </li>
      </ul>
    );
  }
}

export default Footer;
