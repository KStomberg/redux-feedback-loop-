import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
// import {Provider} from 'react-redux';

import {createStore, combineReducers} from 'redux';
import understandingReducer from './components/Understanding/understandingReducer';
import supportedReducer from "./components/Supported/supportedReducer";
import leaveCommentsReducer from "./components/LeaveComments/leaveCommentsReducer";
import feelingTodayReducer from "./components/FeelingToday/feelingTodayReducer";



// combineReducers({
//     understanding: understandingReducer,
//     supported: supportedReducer,
//     leaveComments: leaveCommentsReducer,
//     feelingToday: feelingTodayReducer,
// })

// const store = createStore(

// ) 
// <Provider store={store} >

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
