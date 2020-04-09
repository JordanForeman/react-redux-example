import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './application';

function init() {
    ReactDOM.render(
        <Application />,
        document.getElementById('root') // eslint-disable-line no-undef
    );
}

init();