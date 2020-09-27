import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Understanding extends Component {

    render() {
        return(
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default connect()(withRouter(Understanding))