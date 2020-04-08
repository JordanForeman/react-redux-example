import { combineReducers } from 'redux';
import firstName from './firstName';
import lastName from './lastName';

export const state = combineReducers({
    firstName,
    lastName
});
