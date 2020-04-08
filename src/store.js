import { createStore } from 'redux';
import { state } from './state';

export const store = createStore(
    state,
    {}
);