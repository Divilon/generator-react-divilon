import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import createLogger from 'redux-logger';

const reducer = combineReducers(reducers);
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};
