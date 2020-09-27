import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Understanding extends Component {

    updateUnderstanding = (event) => {
        this.props.dispatch({
            type: 'SET_UNDERSTANDING',
            payload: event.target.value
        });
        console.log('event.target.value', event.target.value);
    }

    onNext = () => {
        console.log('Moving to next page => Supported');
        this.props.history.push('/supported')
    }

    render() {
        return(
            <div>
                <h1>On a scale of 1 to 6, how would you rate your understanding of todays topics?</h1>
                <input required
                    type="number"
                    className="input"
                    onChange={this.updateUnderstanding}
                />
                <button onClick={this.onNext} > Next </button>
            </div>
        )
    }
}

export default connect()(withRouter(Understanding))