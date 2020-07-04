import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Testlist extends Component {
    add = () => {
        this.props.add();
    }

    render() {
        return (
            <div>
                <span>{this.props.Wishlist}</span>
                <button onClick={this.add}>Cart</button>
            </div>
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