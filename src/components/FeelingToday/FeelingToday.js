import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class FeelingToday extends Component {

    updateFeeling = (event) => {
        this.props.dispatch({
            type: 'SET_FEELING',
            payload: event.target.value
        });
        console.log('event.target.value', event.target.value);
    }

    onNext = () => {
        console.log('Moving to next page => Understanding');
        this.props.history.push('/understanding')
    }

    render() {
        return(
            <div>
                <h1>On a scale of 1 to 6, how are you feeling today?</h1>
                <input required
                    type="number"
                    className="input"
                    onChange={this.updateFeeling}
                />
                <button onClick={this.onNext} > Next </button>
            </div>
        )
    }
}

// const mapStateToProps = (reduxState) =>{
//     return {};
// } 

export default connect()(withRouter(FeelingToday))