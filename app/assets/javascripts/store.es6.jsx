import {combineReducers, createStore} from 'redux';
import {routerReducer} from 'react-router-redux';
import rootReducer from './reducers/index.es6';
import {browserHistory} from 'react-router'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const history = browserHistory;

export default store;
