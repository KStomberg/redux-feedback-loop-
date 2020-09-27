import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class SubmitForm extends Component {

    render() {
        return(
            <h1>TEST</h1>
        )
    }
}

export default connect()(withRouter(SubmitForm))