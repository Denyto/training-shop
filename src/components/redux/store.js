import { createStore, compose } from 'redux';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// import { applyMiddleware, createStore, compose } from "redux";

// import rootReducer from './root-reducer';

// const composeEnhancerc = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(rootReducer, composeEnhancerc(applyMiddleware()));
