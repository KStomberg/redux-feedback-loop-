import React, {Component} from 'react';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';

// import { FeelingToday } from "../FeelingToday/FeelingToday";
import FeelingToday from "../FeelingToday/FeelingToday"
import LeaveComments from "../LeaveComments/LeaveComments";
import Supported from "../Supported/Supported";
import Understanding from "../Understanding/Understanding";


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
      </div>
      </Router>
    );
  }
}

export default App;
