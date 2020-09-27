import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ReviewPrevious extends Component {
  onNext = () => {
    console.log('Moving to next page => SubmitForm');
    this.props.history.push('/submit');
  };

  render() {
    return (
      <div>
        <h1>Previous Forms</h1>
        <p>Feeling: {this.props.feeling}</p>
        <p>Understanding: {this.props.understanding}</p>
        <p>Support: {this.props.support}</p>
        <p>Comments: {this.props.comments}</p>
        <button onClick={this.onNext}> Next </button>
      </div>
    );
  }
}

//Grab all previous data
const mapStateToProps = (reduxState) => ({
  feeling: reduxState.feedbackUpdate.feeling,
  understanding: reduxState.feedbackUpdate.understanding,
  support: reduxState.feedbackUpdate.support,
  comments: reduxState.feedbackUpdate.comments,
});

export default connect(mapStateToProps)(withRouter(ReviewPrevious));
