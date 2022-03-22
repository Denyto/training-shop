import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

