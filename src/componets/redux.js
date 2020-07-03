import { connect } from 'react-redux';
import React, { Component } from 'react';


 class Counter extends Component {

    win = () => {
        this.props.win();
    }

    lose = () => {
        this.props.lose();
    }
    render() {
        return (
            <div>
                <span>{this.props.counter}</span>
                <button onClick={this.win}>up</button>
                <button onClick={this.lose}>down</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
        return { 
            win: () => {
            return dispatch({type: "INCREMENT"})
        },
        lose: () => {
            return dispatch({type: "DECREMENT"})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)