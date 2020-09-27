import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitForm extends Component {
  onCompletion = () => {
    alert('Form submitted!');
    this.props.sendFeedback();
    console.log('Form completed, sending you home => /');
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Your done! Hit the submit button to send your form!</h1>
        <button onClick={this.onCompletion}> Submit </button>
      </div>
    );
  }
}

export default connect()(withRouter(SubmitForm));
