import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <div class="card-group">
        <div class="card">
          <img class="card-img-top" src="img/harry.jpg" alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Harry Potter</h5>
            <p class="card-text">

            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="img/cars.jpg" alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Cars</h5>
            <p class="card-text">
          
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="img/batman.jpg" alt="Card cap" />
          <div class="card-body">
            <h5 class="card-title">Batman</h5>
            <p class="card-text">

            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
