import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class SubmitForm extends Component {

    onCompletion = () => {
        alert('Form submitted!');
        this.props.sendFeedback();
        console.log('Form completed, sending you home => /');
        this.props.history.push('/');
    }

    render() {
        return(
            <h1>TEST</h1>
        )
    }
}

export default connect()(withRouter(SubmitForm))