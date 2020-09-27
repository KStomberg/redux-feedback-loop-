import React, {Component} from 'react';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';

import FeelingToday from "../FeelingToday/FeelingToday"
import Understanding from "../Understanding/Understanding";
import Supported from "../Supported/Supported";
import LeaveComments from "../LeaveComments/LeaveComments";
import SubmitForm from "../SubmitForm/SubmitForm"



class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>

        <Route path='/' exact>
          <FeelingToday />
        </Route>

        <Route path='/understanding' exact>
            <Understanding />
          </Route>

          <Route path='/supported' exact>
            <Supported />
          </Route>

          <Route path='/comments' exact>
            <LeaveComments />
          </Route>

          <Route path='/submit' exact>
            <SubmitForm />
          </Route>
        
      </div>
      </Router>
    );
  }
}

export default App;
