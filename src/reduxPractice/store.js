import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import bankReducer from './reducers/bankReducer';
import tabReducer from './reducers/tabReducer';

const logger = createLogger({
    collapsed: true,
    diff: true
});

const reducers = combineReducers({
    bank: bankReducer,
    tab: tabReducer
});

const composeOthers = compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, composeOthers);

export default store;
