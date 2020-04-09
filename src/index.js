import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { Application } from './application';

function init() {
    ReactDOM.render(
        <Provider store={store}>
            <Application />
        </Provider>,
        document.getElementById('root') // eslint-disable-line no-undef
    );

    store.dispatch({
        type: 'Update First Name',
        firstName: 'Not Jordan'
    });
}

init();