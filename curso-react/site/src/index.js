import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore} from 'redux'

import reduces from './reducers'

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Provider store ={createStore(reduces)}>
        <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'));


serviceWorker.unregister();
