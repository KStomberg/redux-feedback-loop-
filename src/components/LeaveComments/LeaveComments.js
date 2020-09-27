import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LeaveComments extends Component {
  updateLeaveComments = (event) => {
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: event.target.value,
    });
    console.log('event.target.value', event.target.value);
  };

  onNext = () => {
    console.log('Moving to next page => review');
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <h1>Would you like to leave any comments?</h1>
        <input
          type="text"
          className="input"
          onChange={this.updateLeaveComments}
        />
        <button onClick={this.onNext}> Next </button>
      </div>
    );
  }
}

export default connect()(withRouter(LeaveComments));
