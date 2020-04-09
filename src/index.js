import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Application } from './application';
import {updateFirstName} from './state/actions';

function init() {
    ReactDOM.render(
        <Provider store={store}>
            <Application />
        </Provider>,
        document.getElementById('root') // eslint-disable-line no-undef
    );

    store.dispatch(updateFirstName('Not Jordan'));
}

init();