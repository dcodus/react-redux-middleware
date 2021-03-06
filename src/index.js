import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/app';
import reducers from './reducers';
//Import custom middleware
import Async from './middlewares/async';

//Apply custom middleware to redux. If you have multiple middleware chain them with a comma

ReactDOM.render(
    <Provider store={createStore(reducers, {}, compose(
    applyMiddleware(Async),
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))}>
        <App />
    </Provider>
    , document.querySelector('.container'));
