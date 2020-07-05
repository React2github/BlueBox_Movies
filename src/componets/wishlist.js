import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Testlist extends Component {
    add = () => {
        this.props.add();
    }
  
    render() {
        const { selected } = this.props;
        
        return (
            <section>
            <div>
                <span>{console.log(selected.Title)}</span>
                <span>{this.props.Wishlist}</span>
                <button onClick={this.add}>Cart</button>
            </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Wishlist: state.Wishlist,
    }
}

const mapDispatchToProps = (dispatch) => {
        return { 
            add: () => {
            return dispatch({type: "TEST"})
        }
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Testlist)