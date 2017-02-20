import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate} from 'redux-persist'

const factory = (reducer) => {  
  if (process.env.NODE_ENV == 'production') {
    return createStore(
      reducer
    );
  } else {
    var createLogger = require('redux-logger');
    var logger = createLogger();

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
      reducer,
      composeEnhancers(applyMiddleware(logger, thunk), autoRehydrate())
    );
  }
};

export default factory;
