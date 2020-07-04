import React, { Component } from 'react'
import { connect } from 'react-redux';


 class Popup extends React.Component {
  add = () => {
    this.props.add();
}

  shop = () => {
  this.props.shop();
}

  rent = () => {
    this.props.rent();
}
  
  rate = () => {
    this.props.rate();
}

  bad = () => {
    this.props.bad();
}

  render() {
    const { selected, closePopup} = this.props;
    return (
      
<section className="popup">
  <div className="content">
      <h2>{ selected.Title } <span>({ selected.Year })</span></h2>
    <p className="rating">Rating: {selected.imdbRating}</p>
    <div className="plot">
        <img src={selected.Poster} />
    <p>{selected.Plot}</p>
    <span>{this.props.Wishlist}</span>
    <button onClick={this.add}>Add to Wish List</button>
    <span>{this.props.Shopping}</span>
    <button onClick={this.shop}>Shopping Cart</button>
    <span>{this.props.Rentals}</span>
    <button onClick={this.rent}>Rent</button>
    <span>{this.props.Rating}</span>
    <button onClick={this.rate}>Rate</button>
    <span>{this.props.Bad}</span>
    <button onClick={this.bad}>Bad</button>   
    </div>
    <button className="close" onClick={closePopup}>Close</button>
  </div>
</section>
    )
}}
 
const mapStateToProps = (state) => {
  return {
      Wishlist: state.Wishlist,
      Shopping: state.Shopping,
      Rentals: state.Rentals,
      Rating: state.Rating,
      Bad: state.Bad
  }
}

const mapDispatchToProps = (dispatch) => {
      return { 
          add: () => {
          return dispatch({type: "LIST"})
      },
          shop: () => {
          return dispatch({type: "SHOP"})
      },
          rent: () => {
          return dispatch({type: "RENT"})
      },
          rate: () => {
          return dispatch({type: "RATE"})
      },
          bad: () => {
          return dispatch({type: "BAD"})
          }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Popup)