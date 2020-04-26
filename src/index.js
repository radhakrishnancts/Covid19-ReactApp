import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Main from './components/Main';

import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/reducer';
import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const store = createStore(rootReducer,applyMiddleware(thunk));
ReactDOM.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
