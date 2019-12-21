import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import reduces from './reducers'

import { BrowserRouter } from 'react-router-dom';

const storeWithMiddleware = applyMiddleware(thunk)(createStore)
ReactDOM.render(
    <BrowserRouter>
    <Provider store ={storeWithMiddleware(reduces)}>
        <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'));


serviceWorker.unregister();
