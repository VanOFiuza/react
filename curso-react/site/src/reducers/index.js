import {combineReducers} from 'redux';

import contatoReducer from './contadoReducer'

const reducers = combineReducers({
    contato : contatoReducer
})

export default reducers;