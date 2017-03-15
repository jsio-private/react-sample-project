import { createStore, applyMiddleware } from 'redux';
import * as createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer/index';

export default createStore(
  reducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);
