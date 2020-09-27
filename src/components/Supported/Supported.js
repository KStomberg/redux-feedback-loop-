import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Supported extends Component {
  updateSupported = (event) => {
    this.props.dispatch({
      type: 'SET_SUPPORTED',
      payload: event.target.value,
    });
    console.log('event.target.value', event.target.value);
  };

  onNext = () => {
    console.log('Moving to next page => LeaveComments');
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h1>
          On a scale of 1 to 6, how well do have you felt supported today?
        </h1>
        <input
          required
          min="1"
          max="6"
          type="number"
          className="input"
          onChange={this.updateSupported}
        />
        <button onClick={this.onNext}> Next </button>
      </div>
    );
  }
}

export default connect()(withRouter(Supported));
