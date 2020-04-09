import { createStore } from 'redux';
import { state } from './state';

export const store = createStore(
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);