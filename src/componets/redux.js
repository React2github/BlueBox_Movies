import { connect } from 'react-redux';
import React, { Component } from 'react';

 class Counter extends Component {

    add = () => {
        this.props.add();
        
    }

    lose = () => {
        this.props.lose();

    
    }

    render() {
        return (
          
            <div>
                <div>{this.props.results}</div>
                <div>{this.props.secretSauce}</div>
                <button onClick={this.add}>Up</button>
                <button onClick={this.lose}>down</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        results: state.results,
        secretSauce: state.secretSauce
    }
}

const mapDispatchToProps = (dispatch) => {
        return { 
            add: () => {
            return dispatch({type: "INCREMENT"})
        },
        lose: () => {
            return dispatch({type: "DECREMENT"})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)