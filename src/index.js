import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import understandingReducer from './components/Understanding/understandingReducer';
import supportedReducer from "./components/Supported/supportedReducer";
import leaveCommentsReducer from "./components/LeaveComments/leaveCommentsReducer";
import feelingTodayReducer from "./components/FeelingToday/feelingTodayReducer";


//initial state
const initialFeedbackForm = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

//Reducer for now, will separate reducers later
const feedbackUpdate = (state = initialFeedbackForm, action) => {

    if (action.type === 'SET_FEELING') {
        //Updating response for feeling
        console.log('SET_FEELINGS action.payload:', action.payload);
        return {
            ...state,
            feeling: action.payload
        }
    } 

    if (action.type === 'SET_UNDERSTANDING') {
        //Updating response for feeling
        console.log('SET_UNDERSTANDING action.payload:', action.payload);
        return {
            ...state,
            understanding: action.payload
        }
    }

    if (action.type === 'SET_COMMENTS') {
        console.log('SET_COMMENTS action.payload:', action.payload);
        //Updating response for feeling
        return {
            ...state,
            comments: action.payload
        }
    }

    return state;

}

const reduxStore = createStore(
    combineReducers({
        feedbackUpdate
    })
)

ReactDOM.render(<Provider store={reduxStore} ><App /> </Provider>, document.getElementById('root') );

registerServiceWorker();
